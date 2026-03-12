// app/src/app/components/episode-player/episode-player.component.ts
import { Component, ElementRef, ViewChild, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { PlayerService } from '../../services/player/player.service'
import { PlayableContent, PlayerState } from '../../models/playable.model'
import { AudioAnalysisSource } from '../../lib/heatmap'
import { VisualizerComponent } from '../visualizer/visualizer.component'
import { MediaSessionService } from '../../services/media-session/media-session.service'
import { DownloadService } from '../../services/download/download.service'

@Component({
  selector: 'app-episode-player',
  standalone: true,
  imports: [VisualizerComponent],
  templateUrl: './episode-player.component.html',
  styleUrl: './episode-player.component.scss'
})
export class EpisodePlayerComponent {
  @ViewChild('audioPlayer')
  set audioPlayerRef(ref: ElementRef<HTMLAudioElement> | undefined) {
    this.audioElement = ref?.nativeElement ?? null
    if (this.audioElement) {
      this.audioAnalysis.connect(this.audioElement)
    }
    this.syncAudio()
  }

  currentContent: PlayableContent | null = null
  progressPercent: number = 0    // 0–100, drives fill gradient and range value
  duration: number = 0           // seconds, populated on loadedmetadata
  isPlaying: boolean = false
  isDragging: boolean = false    // true while user scrubs; pauses timeupdate syncing
  showVisualizer: boolean = false
  isConfirmingDelete: boolean = false

  private audioElement: HTMLAudioElement | null = null
  private lastState: PlayerState | null = null
  private activeLink: string | null = null
  private lastReportedPosition = 0
  private readonly audioAnalysis = inject(AudioAnalysisSource)
  private readonly mediaSessionService = inject(MediaSessionService)
  protected readonly downloadService = inject(DownloadService)

  constructor(private readonly playerService: PlayerService) {
    // iOS Safari: pre-unlock AudioContext on first user gesture, before
    // Angular CD fires the @ViewChild setter and calls connect()
    if (typeof document !== 'undefined') {
      document.addEventListener('pointerdown', () => this.audioAnalysis.resume(), { once: true })
    }

    // Handle background playback: prevent pause when page visibility changes
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        // Keep audio playing even when page goes to background
        // The MediaSession API handles lock screen controls
        if (!document.hidden && this.audioElement?.paused && this.lastState?.isPlaying) {
          // Page came back to foreground and audio was paused - resume
          void this.audioElement.play()
        }
      })
    }

    // Register Media Session action handlers
    this.mediaSessionService.registerHandlers({
      play: () => {
        if (this.lastState?.content) {
          this.playerService.performAction('play', this.lastState.content)
        }
      },
      pause: () => this.playerService.performAction('pause'),
      seekbackward: () => {
        if (!this.audioElement) return
        const time = Math.max(0, this.audioElement.currentTime - 15)
        this.playerService.performAction('seek', undefined, time)
        if (this.audioElement) this.audioElement.currentTime = time
      },
      seekforward: () => {
        if (!this.audioElement) return
        const time = Math.min(this.duration, this.audioElement.currentTime + 15)
        this.playerService.performAction('seek', undefined, time)
        if (this.audioElement) this.audioElement.currentTime = time
      },
      seek: (seconds: number) => {
        const time = Math.max(0, Math.min(this.duration, seconds))
        this.playerService.performAction('seek', undefined, time)
        if (this.audioElement) this.audioElement.currentTime = time
      }
    })

    this.playerService
      .getState()
      .pipe(takeUntilDestroyed())
      .subscribe(state => {
        this.lastState = state
        this.currentContent = state.content
        this.isPlaying = state.isPlaying

        // Update Media Session metadata; defer playback state to onAudioPlaying()
        // so it's set only after the audio element actually starts output (race condition fix).
        if (state.content) {
          this.mediaSessionService.setMetadata(state.content)
          if (!state.isPlaying) {
            this.mediaSessionService.setPlaybackState('paused')
          }
        }

        this.syncAudio()
      })
  }

  togglePlay(): void {
    if (!this.lastState) return
    // Keep AudioContext running — browsers may re-suspend it; this is a user gesture.
    this.audioAnalysis.resume()
    if (this.lastState.isPlaying) {
      this.playerService.performAction('pause')
    } else {
      this.playerService.performAction('play', this.lastState.content ?? undefined)
    }
  }

  onMetadata(): void {
    this.duration = this.audioElement?.duration ?? 0
    // Report initial position state to OS media panel
    this.mediaSessionService.setPositionState(this.duration, this.audioElement?.currentTime ?? 0)
    this.syncAudio()  // audio is now seekable — apply saved position
  }

  onTimeUpdate(): void {
    if (!this.audioElement || !this.lastState) return

    // While the user drags the scrubber, don't overwrite their input
    if (!this.isDragging && this.audioElement.duration) {
      this.progressPercent = (this.audioElement.currentTime / this.audioElement.duration) * 100
    }

    const position = this.audioElement.currentTime
    if (Math.abs(position - this.lastState.currentTime) > 1) {
      this.playerService.performAction('seek', undefined, position)
    }

    // Update OS media scrubber when position changes by >2 seconds
    if (Math.abs(position - this.lastReportedPosition) > 2) {
      this.mediaSessionService.setPositionState(this.duration, position)
      this.lastReportedPosition = position
    }
  }

  onSeek(event: Event): void {
    const pct = +(event.target as HTMLInputElement).value
    const time = (pct / 100) * this.duration
    this.progressPercent = pct
    this.playerService.performAction('seek', undefined, time)
    if (this.audioElement) {
      this.audioElement.currentTime = time
    }
  }

  onAudioEnded(): void {
    this.playerService.performAction('stop')
  }

  onAudioPlaying(): void {
    // The audio element has actually started output — now safe to signal iOS
    // that the background audio session should remain active.
    this.mediaSessionService.setPlaybackState('playing')
    this.audioAnalysis.resume()  // keep AudioContext alive when page backgrounds
  }

  startDownload(): void {
    if (!this.currentContent) return
    void this.downloadService.startDownload(this.currentContent)
  }

  cancelDownload(): void {
    if (!this.currentContent) return
    this.downloadService.cancelDownload(this.currentContent.id)
  }

  async confirmDelete(): Promise<void> {
    if (!this.currentContent) return
    await this.downloadService.deleteDownload(this.currentContent.id)
    this.isConfirmingDelete = false
    // Audio will re-sync on next timeupdate since blob URL is now gone
  }

  private syncAudio(): void {
    if (!this.audioElement || !this.lastState) return

    const { content, currentTime, isPlaying } = this.lastState

    if (!content) {
      this.audioElement.pause()
      if (this.activeLink) {
        this.audioElement.removeAttribute('src')
        this.audioElement.load()
        this.activeLink = null
      }
      return
    }

    // Prefer blob URL if episode is downloaded; fall back to stream URL
    const resolvedLink = this.downloadService.getBlobUrl(content.id) ?? content.link
    if (this.activeLink !== resolvedLink) {
      this.audioElement.src = resolvedLink
      this.audioElement.load()
      this.activeLink = resolvedLink
    }

    if (Math.abs(this.audioElement.currentTime - currentTime) > 1) {
      this.audioElement.currentTime = currentTime
    }

    if (isPlaying && this.audioElement.paused) {
      void this.audioElement.play()
    } else if (!isPlaying && !this.audioElement.paused) {
      this.audioElement.pause()
    }
  }
}
