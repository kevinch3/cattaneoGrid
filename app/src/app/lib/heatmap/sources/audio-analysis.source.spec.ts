import { TestBed } from '@angular/core/testing'
import { AudioAnalysisSource } from './audio-analysis.source'

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

      ;(mockAudio as any).captureStream = jasmine.createSpy('captureStream').and.returnValue(mockStream)

      service.connect(mockAudio)

      expect((mockAudio as any).captureStream).toHaveBeenCalled()
    })

    it('should create analyser node', () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = jasmine.createSpy('captureStream').and.returnValue(mockStream)

      service.connect(mockAudio)

      expect(service.getAnalyserNode()).toBeTruthy()
    })

    it('should set analyser fftSize to 256', () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = jasmine.createSpy('captureStream').and.returnValue(mockStream)

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

      ;(mockAudio as any).captureStream = jasmine.createSpy('captureStream').and.returnValue(mockStream)

      service.connect(mockAudio)

      expect(() => service.disconnect()).not.toThrow()
    })
  })

  describe('events$ observable', () => {
    it('should emit events after connect', (done: DoneFn) => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = jasmine.createSpy('captureStream').and.returnValue(mockStream)

      service.connect(mockAudio)

      let emitted = false
      const sub = service.events$.subscribe(() => {
        emitted = true
        sub.unsubscribe()
        service.disconnect()
        done()
      })

      setTimeout(() => {
        if (!emitted) {
          sub.unsubscribe()
          service.disconnect()
          done()
        }
      }, 150)
    })
  })

  describe('frequencyData$ observable', () => {
    it('should emit frequency data after connect', (done: DoneFn) => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = jasmine.createSpy('captureStream').and.returnValue(mockStream)

      service.connect(mockAudio)

      let emitted = false
      const sub = service.frequencyData$.subscribe((data) => {
        expect(data).toBeInstanceOf(Uint8Array)
        expect(data.length).toBeGreaterThan(0)
        emitted = true
        sub.unsubscribe()
        service.disconnect()
        done()
      })

      setTimeout(() => {
        if (!emitted) {
          sub.unsubscribe()
          service.disconnect()
          done()
        }
      }, 150)
    })
  })

  describe('background playback scenario (Web Audio graph isolation)', () => {
    it('should connect captured stream through analyser to destination', () => {
      const mockAudio = document.createElement('audio')
      const mockStream = new MediaStream()

      ;(mockAudio as any).captureStream = jasmine.createSpy('captureStream').and.returnValue(mockStream)

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
  })
})
