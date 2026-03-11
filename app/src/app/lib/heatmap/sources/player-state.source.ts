import { Injectable, DestroyRef, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Subject, Observable } from 'rxjs'
import { ColorSource, HeatmapEvent, ColorModifier } from '../heatmap.types'
import { PlayerService } from '../../../services/player/player.service'
import { parseRgb, clamp } from '../color-utils'

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
          // applyToBase: true on both events — prevents brighten from stacking
          // on every seek/timeupdate state emission, which would saturate to white.
          if (state.isPlaying) {
            this._subject.next({
              type: 'player-state',
              episodeId,
              applyToBase: true,
              colorModifier: brightenModifier
            })
          } else {
            this._subject.next({
              type: 'player-state',
              episodeId,
              applyToBase: true,
              colorModifier: identityModifier  // resets tile to base color
            })
          }
        }
      })
  }

  destroy(): void {
    this._subject.complete()
  }
}
