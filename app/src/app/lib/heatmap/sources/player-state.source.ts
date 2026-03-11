import { Injectable, DestroyRef, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Subject, Observable } from 'rxjs'
import { ColorSource, HeatmapEvent, ColorModifier } from '../heatmap.types'
import { PlayerService } from '../../../services/player/player.service'

function parseRgb(color: string): [number, number, number] | null {
  const match = color.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/)
  if (!match) return null
  return [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)]
}

function clamp(value: number): number {
  return Math.max(0, Math.min(255, value))
}

const brightenModifier: ColorModifier = (baseColor: string) => {
  const rgb = parseRgb(baseColor)
  if (!rgb) return baseColor
  const [r, g, b] = rgb
  return `rgb(${clamp(r + 40)},${clamp(g + 40)},${clamp(b + 40)})`
}

const identityModifier: ColorModifier = (c: string) => c

@Injectable({ providedIn: 'root' })
export class PlayerStateSource implements ColorSource {
  private readonly playerService = inject(PlayerService)
  private readonly destroyRef = inject(DestroyRef)

  private _subject = new Subject<HeatmapEvent>()
  readonly events$: Observable<HeatmapEvent> = this._subject.asObservable()

  constructor() {
    this.playerService.getState()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(state => {
        if (state.content !== null) {
          const episodeId = state.content.link
          if (state.isPlaying) {
            this._subject.next({
              type: 'player-state',
              episodeId,
              colorModifier: brightenModifier
            })
          } else {
            this._subject.next({
              type: 'player-state',
              episodeId,
              colorModifier: identityModifier
            })
          }
        }
      })
  }

  destroy(): void {
    this._subject.complete()
  }
}
