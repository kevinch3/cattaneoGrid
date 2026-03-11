import { Injectable, NgZone, DestroyRef, inject } from '@angular/core'
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

function energyModifier(energy: number): ColorModifier {
  return (baseColor: string) => {
    const rgb = parseRgb(baseColor)
    if (!rgb) return baseColor
    const [r, g, b] = rgb
    const boost = Math.round(energy * 60)
    return `rgb(${clamp(r + boost)},${clamp(g + boost)},${clamp(b + boost)})`
  }
}

@Injectable({ providedIn: 'root' })
export class AudioAnalysisSource implements ColorSource {
  private readonly ngZone = inject(NgZone)
  private readonly destroyRef = inject(DestroyRef)

  private _subject = new Subject<HeatmapEvent>()
  readonly events$: Observable<HeatmapEvent> = this._subject.asObservable()

  private audioContext: AudioContext | null = null
  private analyser: AnalyserNode | null = null
  private source: MediaElementAudioSourceNode | null = null
  private rafId: number | null = null
  private lastEnergy: number = 0
  private connected = false

  constructor() {
    this.destroyRef.onDestroy(() => this.disconnect())
  }

  connect(audioElement: HTMLAudioElement): void {
    if (this.connected) return

    if (!this.audioContext) {
      this.audioContext = new AudioContext()
    }

    this.analyser = this.audioContext.createAnalyser()
    this.analyser.fftSize = 256

    this.source = this.audioContext.createMediaElementSource(audioElement)
    this.source.connect(this.analyser)
    this.analyser.connect(this.audioContext.destination)

    this.connected = true
    this.startLoop(this.ngZone)
  }

  private startLoop(ngZone: NgZone): void {
    ngZone.runOutsideAngular(() => {
      this.tick(ngZone)
    })
  }

  private tick(ngZone: NgZone): void {
    if (!this.analyser || !this.connected) return

    const data = new Uint8Array(this.analyser.frequencyBinCount)
    this.analyser.getByteFrequencyData(data)

    let sum = 0
    for (let i = 0; i < data.length; i++) {
      sum += data[i]
    }
    const energy = sum / data.length / 255

    if (Math.abs(energy - this.lastEnergy) > 0.05) {
      this.lastEnergy = energy
      this._subject.next({
        type: 'audio',
        episodeId: undefined,
        colorModifier: energyModifier(energy)
      })
    }

    this.rafId = requestAnimationFrame(() => this.tick(ngZone))
  }

  disconnect(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
    this.connected = false
  }

  destroy(): void {
    this.disconnect()
    this._subject.complete()
    if (this.audioContext) {
      this.audioContext.close()
      this.audioContext = null
    }
  }
}
