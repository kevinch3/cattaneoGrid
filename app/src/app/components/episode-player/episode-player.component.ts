// app/src/app/components/episode-player/episode-player.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { PlayerService } from '../../services/player/player.service'
import { PlayableContent, PlayerState } from '../../models/playable.model'

@Component({
  selector: 'app-episode-player',
  standalone: true,
  templateUrl: './episode-player.component.html',
  styleUrl: './episode-player.component.scss'
})
export class EpisodePlayerComponent {
  @ViewChild('audioPlayer')
  set audioPlayerRef(ref: ElementRef<HTMLAudioElement> | undefined) {
    this.audioElement = ref?.nativeElement ?? null
    this.syncAudio()
  }

  currentContent: PlayableContent | null = null
  progressPercent: number = 0    // 0–100, updated each timeupdate
  isPlaying: boolean = false

  private audioElement: HTMLAudioElement | null = null
  private lastState: PlayerState | null = null
  private activeLink: string | null = null

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
    if (this.lastState.isPlaying) {
      this.playerService.performAction('pause')
    } else {
      this.playerService.performAction('play', this.lastState.content ?? undefined)
    }
  }

  onTimeUpdate(): void {
    if (!this.audioElement || !this.lastState) return

    // Update progress percent for the custom progress bar
    if (this.audioElement.duration) {
      this.progressPercent = (this.audioElement.currentTime / this.audioElement.duration) * 100
    }

    // Sync position back to service (existing behaviour)
    const position = this.audioElement.currentTime
    if (Math.abs(position - this.lastState.currentTime) > 1) {
      this.playerService.performAction('seek', undefined, position)
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
