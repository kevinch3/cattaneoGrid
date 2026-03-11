// app/src/app/components/episode-player/episode-player.component.ts
import { Component, ElementRef, ViewChild, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { PlayerService } from '../../services/player/player.service'
import { PlayableContent, PlayerState } from '../../models/playable.model'
import { AudioAnalysisSource } from '../../lib/heatmap'
import { VisualizerComponent } from '../visualizer/visualizer.component'

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

  private audioElement: HTMLAudioElement | null = null
  private lastState: PlayerState | null = null
  private activeLink: string | null = null
  private readonly audioAnalysis = inject(AudioAnalysisSource)

  constructor(private readonly playerService: PlayerService) {
    this.playerService
      .getState()
      .pipe(takeUntilDestroyed())
      .subscribe(state => {
        this.lastState = state
        this.currentContent = state.content
        this.isPlaying = state.isPlaying
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

    if (this.activeLink !== content.link) {
      this.audioElement.src = content.link
      this.audioElement.load()
      this.activeLink = content.link
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
