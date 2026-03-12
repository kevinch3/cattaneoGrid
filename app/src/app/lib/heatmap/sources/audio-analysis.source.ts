import { Injectable, NgZone, DestroyRef, inject } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import { ColorSource, HeatmapEvent, ColorModifier } from '../heatmap.types'
import { parseRgb, clamp } from '../color-utils'

function energyModifier(energy: number): ColorModifier {
  return (baseColor: string) => {
    const rgb = parseRgb(baseColor)
    if (!rgb) return baseColor
    const [r, g, b] = rgb
    const boost = Math.round(energy * 30)   // 30 instead of 60 — gentler brightening
    return `rgb(${clamp(r + boost)},${clamp(g + boost)},${clamp(b + boost)})`
  }
}

@Injectable({ providedIn: 'root' })
export class AudioAnalysisSource implements ColorSource {
  private readonly ngZone = inject(NgZone)
  private readonly destroyRef = inject(DestroyRef)

  private _subject = new Subject<HeatmapEvent>()
  readonly events$: Observable<HeatmapEvent> = this._subject.asObservable()

  private _frequencyData$ = new Subject<Uint8Array>()
  readonly frequencyData$: Observable<Uint8Array> = this._frequencyData$.asObservable()

  private audioContext: AudioContext | null = null
  private analyser: AnalyserNode | null = null
  private source: MediaElementAudioSourceNode | null = null
  private rafId: number | null = null
  private lastEnergy: number = 0
  private smoothedEnergy: number = 0   // EMA-smoothed energy
  private frameCount: number = 0       // used to throttle emission to ~20fps
  private connected = false
  private _destroyed = false

  constructor() {
    this.destroyRef.onDestroy(() => this.destroy())
  }

  connect(audioElement: HTMLAudioElement): void {
    if (this.connected) return

    if (!this.audioContext) {
      this.audioContext = new AudioContext()
    }

    // Browsers suspend AudioContext by default (autoplay policy).
    // resume() must be called inside a user-gesture call stack — connect() is always
    // triggered by a user clicking an episode, so this is safe and necessary.
    void this.audioContext.resume()

    this.analyser = this.audioContext.createAnalyser()
    this.analyser.fftSize = 256

    this.source = this.audioContext.createMediaElementSource(audioElement)
    this.source.connect(this.analyser)
    this.analyser.connect(this.audioContext.destination)

    this.connected = true
    this.startLoop(this.ngZone)
  }

  /** Call from a user-gesture handler (e.g. play button) to keep the context running. */
  resume(): void {
    if (!this.audioContext) {
      this.audioContext = new AudioContext()
    }
    void this.audioContext.resume()
  }

  getAnalyserNode(): AnalyserNode | null {
    return this.analyser
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

    // Emit raw FFT data on every frame for canvas visualizer
    this._frequencyData$.next(new Uint8Array(data))

    let sum = 0
    for (let i = 0; i < data.length; i++) {
      sum += data[i]
    }
    const rawEnergy = sum / data.length / 255

    // EMA smoothing: reduces frame-to-frame jitter
    this.smoothedEnergy = this.smoothedEnergy * 0.8 + rawEnergy * 0.2
    this.frameCount++

    // Throttle to every 3rd frame (~20fps at 60fps display rate).
    // CSS transition: all 0.3s on tiles handles interpolation — silky smooth.
    if (this.frameCount % 3 === 0 && Math.abs(this.smoothedEnergy - this.lastEnergy) > 0.05) {
      this.lastEnergy = this.smoothedEnergy
      this._subject.next({
        type: 'audio',
        episodeId: undefined,
        applyToBase: true,   // always apply to stored base color, never stack on current
        colorModifier: energyModifier(this.smoothedEnergy)
      })
    }

    if (this.connected) {
      this.rafId = requestAnimationFrame(() => this.tick(ngZone))
    }
  }

  disconnect(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
    this.connected = false
  }

  destroy(): void {
    if (this._destroyed) return
    this._destroyed = true
    this.disconnect()
    this._subject.complete()
    this._frequencyData$.complete()
    if (this.audioContext) {
      this.audioContext.close()
      this.audioContext = null
    }
  }
}
