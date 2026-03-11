import { Injectable, signal, WritableSignal, Signal } from '@angular/core'
import { HeatmapMood, ColorModifier } from './heatmap.types'

function parseRgb(color: string): [number, number, number] {
  const m = color.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/)
  if (!m) return [128, 128, 128]
  return [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10)]
}

function clamp(v: number): number {
  return Math.max(0, Math.min(255, Math.round(v)))
}

@Injectable({ providedIn: 'root' })
export class MoodService {
  readonly moodOptions: { value: HeatmapMood; label: string }[] = [
    { value: 'neutral',   label: 'Neutral'   },
    { value: 'energetic', label: 'Energetic' },
    { value: 'chill',     label: 'Chill'     },
    { value: 'warm',      label: 'Warm'      },
    { value: 'dark',      label: 'Dark'      },
  ]

  readonly palettes: Record<HeatmapMood, ColorModifier> = {
    neutral: (color) => color,

    energetic: (color) => {
      const [r, g, b] = parseRgb(color)
      return `rgb(${clamp(r + 30)},${clamp(g - 10)},${clamp(b)})`
    },

    chill: (color) => {
      const [r, g, b] = parseRgb(color)
      return `rgb(${clamp(r - 20)},${clamp(g)},${clamp(b + 40)})`
    },

    warm: (color) => {
      const [r, g, b] = parseRgb(color)
      return `rgb(${clamp(r + 25)},${clamp(g + 15)},${clamp(b)})`
    },

    dark: (color) => {
      const [r, g, b] = parseRgb(color)
      return `rgb(${clamp(r * 0.6)},${clamp(g * 0.6)},${clamp(b * 0.6)})`
    },
  }

  private readonly _currentMood: WritableSignal<HeatmapMood> = signal<HeatmapMood>(this.loadInitialMood())
  readonly currentMood: Signal<HeatmapMood> = this._currentMood.asReadonly()

  setMood(mood: HeatmapMood): void {
    this._currentMood.set(mood)
    try {
      localStorage.setItem('heatmap-mood', mood)
    } catch {
      // private mode or storage unavailable
    }
  }

  private loadInitialMood(): HeatmapMood {
    try {
      const saved = localStorage.getItem('heatmap-mood') as HeatmapMood | null
      if (saved && this.moodOptions.some(o => o.value === saved)) {
        return saved
      }
    } catch {
      // private mode or storage unavailable
    }
    return 'neutral'
  }
}
