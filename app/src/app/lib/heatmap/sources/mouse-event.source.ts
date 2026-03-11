import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import { ColorSource, HeatmapEvent, ColorModifier } from '../heatmap.types'
import { parseRgb, clamp } from '../color-utils'

const flashModifier: ColorModifier = (baseColor: string) => {
  const rgb = parseRgb(baseColor)
  if (!rgb) return baseColor
  const [r, g, b] = rgb
  return `rgb(${clamp(r + 60)},${clamp(g + 60)},${clamp(b + 60)})`
}

const cyanModifier: ColorModifier = (baseColor: string) => {
  const rgb = parseRgb(baseColor)
  if (!rgb) return baseColor
  const [r, g, b] = rgb
  return `rgb(${r},${clamp(g + 80)},${clamp(b + 80)})`
}

@Injectable({ providedIn: 'root' })
export class MouseEventSource implements ColorSource {
  private _subject = new Subject<HeatmapEvent>()
  readonly events$: Observable<HeatmapEvent> = this._subject.asObservable()

  emitClick(episodeId: string): void {
    this._subject.next({
      type: 'mouse',
      episodeId,
      colorModifier: flashModifier
    })
  }

  emitContextMenu(episodeId: string): void {
    this._subject.next({
      type: 'mouse',
      episodeId,
      colorModifier: cyanModifier
    })
  }

  destroy(): void {
    this._subject.complete()
  }
}
