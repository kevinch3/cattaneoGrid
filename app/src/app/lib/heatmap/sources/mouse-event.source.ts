import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import { ColorSource, HeatmapEvent, ColorModifier } from '../heatmap.types'

function parseRgb(color: string): [number, number, number] | null {
  const match = color.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/)
  if (!match) return null
  return [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)]
}

function clamp(value: number): number {
  return Math.max(0, Math.min(255, value))
}

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
