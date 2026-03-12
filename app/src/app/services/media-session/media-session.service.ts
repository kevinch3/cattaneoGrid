import { Injectable } from '@angular/core'
import { PlayableContent } from '../../models/playable.model'

export interface MediaSessionHandler {
  play: () => void
  pause: () => void
  seekbackward: () => void
  seekforward: () => void
  seek: (seconds: number) => void
}

@Injectable({
  providedIn: 'root'
})
export class MediaSessionService {
  private isSupported = typeof navigator !== 'undefined' && 'mediaSession' in navigator

  /**
   * Set metadata displayed on lock screen and media controls.
   */
  setMetadata(content: PlayableContent): void {
    if (!this.isSupported) return

    navigator.mediaSession.metadata = new MediaMetadata({
      title: content.title,
      artist: 'Hernán Cattaneo',
      artwork: [
        {
          src: 'assets/icons/favicon_io/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'assets/icons/favicon_io/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    })
  }

  /**
   * Update playback state indicator on lock screen.
   */
  setPlaybackState(state: 'playing' | 'paused' | 'none'): void {
    if (!this.isSupported) return
    navigator.mediaSession.playbackState = state as MediaSessionPlaybackState
  }

  /**
   * Update position and duration on OS scrubber.
   * Guarded against NaN/Infinity during metadata load.
   */
  setPositionState(duration: number, position: number): void {
    if (!this.isSupported) return

    // Guard against NaN/Infinity from uninitialized audio
    if (!Number.isFinite(duration) || !Number.isFinite(position)) return

    try {
      navigator.mediaSession.setPositionState({
        duration,
        playbackRate: 1,
        position
      })
    } catch (err) {
      // Some browsers may throw on invalid state
      console.debug('setPositionState error:', err)
    }
  }

  /**
   * Register action handlers for play, pause, seek.
   * Call once from the component; handlers should delegate to PlayerService.
   */
  registerHandlers(handlers: MediaSessionHandler): void {
    if (!this.isSupported) return

    navigator.mediaSession.setActionHandler('play', handlers.play)
    navigator.mediaSession.setActionHandler('pause', handlers.pause)
    navigator.mediaSession.setActionHandler('seekbackward', () => handlers.seekbackward())
    navigator.mediaSession.setActionHandler('seekforward', () => handlers.seekforward())
    // 'seekto' is the correct action name for scrubber seek
    navigator.mediaSession.setActionHandler('seekto', event => {
      if (typeof event.seekTime === 'number') {
        handlers.seek(event.seekTime)
      }
    })
  }
}
