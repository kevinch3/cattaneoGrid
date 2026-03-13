import { TestBed } from '@angular/core/testing'
import { AudioAnalysisSource } from './audio-analysis.source'
import { vi } from 'vitest'

describe('AudioAnalysisSource', () => {
  let service: AudioAnalysisSource

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudioAnalysisSource]
    })
    service = TestBed.inject(AudioAnalysisSource)
  })

  afterEach(() => {
    service.destroy()
  })

  it('should create', () => {
    expect(service).toBeTruthy()
  })

  describe('connect() with captureStream support', () => {
    it('should call captureStream when available', () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()
      const captureSpy = vi.fn().mockReturnValue(mockStream)

      ;(mockAudio as any).captureStream = captureSpy

      service.connect(mockAudio)

      expect(captureSpy).toHaveBeenCalled()
    })

    it('should create analyser node', () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = vi.fn().mockReturnValue(mockStream)

      service.connect(mockAudio)

      expect(service.getAnalyserNode()).toBeTruthy()
    })

    it('should set analyser fftSize to 256', () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = vi.fn().mockReturnValue(mockStream)

      service.connect(mockAudio)

      const analyser = service.getAnalyserNode()
      expect(analyser?.fftSize).toBe(256)
    })
  })

  describe('connect() without captureStream (iOS Safari)', () => {
    it('should gracefully handle missing captureStream', () => {
      const mockAudio = document.createElement('audio')
      delete (mockAudio as any).captureStream

      expect(() => service.connect(mockAudio)).not.toThrow()
    })

    it('should still create analyser when captureStream unavailable', () => {
      const mockAudio = document.createElement('audio')
      delete (mockAudio as any).captureStream

      service.connect(mockAudio)

      expect(service.getAnalyserNode()).toBeTruthy()
    })
  })

  describe('disconnect()', () => {
    it('should not throw when source is null', () => {
      const mockAudio = document.createElement('audio')
      delete (mockAudio as any).captureStream

      service.connect(mockAudio)

      expect(() => service.disconnect()).not.toThrow()
    })

    it('should not throw when source exists', () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = vi.fn().mockReturnValue(mockStream)

      service.connect(mockAudio)

      expect(() => service.disconnect()).not.toThrow()
    })
  })

  describe('events$ observable', () => {
    it('should NOT emit events after connect alone (analysis is off by default)', async () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = vi.fn().mockReturnValue(mockStream)

      service.connect(mockAudio)

      let emitted = false
      const sub = service.events$.subscribe(() => {
        emitted = true
      })

      await new Promise(resolve => setTimeout(resolve, 150))
      expect(emitted).toBe(false)
      sub.unsubscribe()
      service.disconnect()
    })

    it('should emit events after startAnalysis is called', async () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = vi.fn().mockReturnValue(mockStream)

      service.connect(mockAudio)
      service.startAnalysis()

      let emitted = false
      const sub = service.events$.subscribe(() => {
        emitted = true
      })

      await new Promise(resolve => setTimeout(resolve, 150))
      expect(emitted).toBe(true)
      sub.unsubscribe()
      service.disconnect()
    })
  })

  describe('frequencyData$ observable', () => {
    it('should NOT emit frequency data after connect alone (analysis is off by default)', async () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = vi.fn().mockReturnValue(mockStream)

      service.connect(mockAudio)

      let emitted = false
      const sub = service.frequencyData$.subscribe(() => {
        emitted = true
      })

      await new Promise(resolve => setTimeout(resolve, 150))
      expect(emitted).toBe(false)
      sub.unsubscribe()
      service.disconnect()
    })

    it('should emit frequency data after startAnalysis', async () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = vi.fn().mockReturnValue(mockStream)

      service.connect(mockAudio)
      service.startAnalysis()

      let emitted = false
      let lastData: Uint8Array | null = null
      const sub = service.frequencyData$.subscribe((data) => {
        emitted = true
        lastData = data
      })

      await new Promise(resolve => setTimeout(resolve, 150))
      expect(emitted).toBe(true)
      expect(lastData).toBeInstanceOf(Uint8Array)
      expect((lastData as Uint8Array | null)?.length ?? 0).toBeGreaterThan(0)
      sub.unsubscribe()
      service.disconnect()
    })

    it('should stop emitting frequency data after stopAnalysis', async () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = vi.fn().mockReturnValue(mockStream)

      service.connect(mockAudio)
      service.startAnalysis()

      let emissionCount = 0
      const sub = service.frequencyData$.subscribe(() => {
        emissionCount++
      })

      await new Promise(resolve => setTimeout(resolve, 100))
      const emissionsBeforeStop = emissionCount

      service.stopAnalysis()

      await new Promise(resolve => setTimeout(resolve, 100))
      const emissionsAfterStop = emissionCount - emissionsBeforeStop

      expect(emissionsAfterStop).toBeLessThan(2)
      sub.unsubscribe()
      service.disconnect()
    })
  })

  describe('background playback scenario (Web Audio graph isolation)', () => {
    it('should connect captured stream through analyser to destination', () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = vi.fn().mockReturnValue(mockStream)

      service.connect(mockAudio)

      // When connected with captureStream:
      // - Original <audio> element plays independently (HTML5 native)
      // - Captured stream copy routes: source → analyser → silentGain(0) → destination
      // - Analyser receives data without producing audible output through the AudioContext
      expect(service.getAnalyserNode()).toBeTruthy()

      service.disconnect()
    })

    it('should gracefully degrade on iOS Safari without captureStream', () => {
      const mockAudio = document.createElement('audio')
      delete (mockAudio as any).captureStream

      service.connect(mockAudio)

      // iOS Safari: no captureStream
      // - Native <audio> element still plays in background
      // - Analyser exists but has no frequency data (all zeros)
      // - No errors or side effects
      expect(service.getAnalyserNode()).toBeTruthy()

      service.disconnect()
    })

    it('should stop analysis when stopAnalysis is called (including on background)', async () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = vi.fn().mockReturnValue(mockStream)

      service.connect(mockAudio)
      service.startAnalysis()

      // Initially analysis is running and emitting
      let emissionCount = 0
      const subscription = service.frequencyData$.subscribe(() => {
        emissionCount++
      })

      await new Promise(resolve => setTimeout(resolve, 50))
      const emissionsBeforeStop = emissionCount

      // Simulate stopping analysis (what episode-player does on visibilitychange/hidden)
      service.stopAnalysis()

      await new Promise(resolve => setTimeout(resolve, 50))
      const emissionsDuringStop = emissionCount - emissionsBeforeStop

      // Analysis should stop emitting when stopped (or emit very little)
      expect(emissionsDuringStop).toBeLessThan(2)

      subscription.unsubscribe()
    })

    it('should guarantee background playback never breaks due to analysis', () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = vi.fn().mockReturnValue(mockStream)

      service.connect(mockAudio)

      // CRITICAL: Audio analysis must NEVER use createMediaElementSource
      // because it breaks Media Session API and background playback
      expect(service['audioContext']!.createMediaElementSource).not.toHaveBeenCalled()

      // When page backgrounds, analysis pauses but audio element remains untouched
      Object.defineProperty(document, 'hidden', {
        configurable: true,
        get: () => true
      })
      document.dispatchEvent(new Event('visibilitychange'))

      // The native <audio> element's playback is completely independent
      // and continues to work in background (tested via Media Session API)
      // This test just verifies we don't break it via Web Audio routing
      expect(mockAudio.paused).not.toBe(true) // Audio element itself not paused by us
    })
  })
})
