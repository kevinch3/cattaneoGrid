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
  private source: MediaStreamAudioSourceNode | null = null
  private silentGain: GainNode | null = null
  private rafId: number | null = null
  private lastEnergy: number = 0
  private smoothedEnergy: number = 0   // EMA-smoothed energy
  private frameCount: number = 0       // used to throttle emission to ~20fps
  private connected = false
  private _destroyed = false
  private shouldAnalyze = false        // true if analysis should be running (paused while backgrounded)

  constructor() {
    this.destroyRef.onDestroy(() => this.destroy())

    // Pause analysis when page backgrounded to prevent breaking background audio playback
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        if (document.hidden && this.connected) {
          // Page backgrounded: pause analysis to free AudioContext resources
          this.pauseAnalysis()
        } else if (!document.hidden && !this.connected) {
          // Page returned to foreground: resume analysis if it was running
          this.resumeAnalysis()
        }
      })
    }
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

    // Use captureStream() to get a copy of audio for analysis without affecting
    // the native <audio> element's playback path. A silent GainNode (gain=0) keeps
    // the Web Audio graph connected to the destination (required for analyser data
    // to flow) without producing any audible output from this path.
    // On iOS Safari where captureStream is unavailable, analysis is silently skipped.
    const stream = (audioElement as any).captureStream?.()
    if (stream) {
      this.source = this.audioContext.createMediaStreamSource(stream)
      this.silentGain = this.audioContext.createGain()
      this.silentGain.gain.value = 0
      this.source.connect(this.analyser)
      this.analyser.connect(this.silentGain)
      this.silentGain.connect(this.audioContext.destination)
    } else {
      // captureStream not available (iOS Safari)
      this.source = null
    }

    this.connected = true
    this.shouldAnalyze = true
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
    this.source?.disconnect()
    this.analyser?.disconnect()
    this.silentGain?.disconnect()
    this.silentGain = null
  }

  /** Pause analysis when page is backgrounded (preserves audio playback). */
  private pauseAnalysis(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
    this.connected = false
    // Don't disconnect Web Audio nodes — keep the graph intact for resume
  }

  /** Resume analysis when page returns to foreground. */
  private resumeAnalysis(): void {
    if (this.shouldAnalyze && !this.connected && this.analyser) {
      this.connected = true
      this.startLoop(this.ngZone)
    }
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
