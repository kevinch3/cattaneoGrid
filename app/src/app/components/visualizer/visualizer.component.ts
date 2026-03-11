import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, DestroyRef } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { scaleLinear } from 'd3-scale'
import { AudioAnalysisSource } from '../../lib/heatmap'

@Component({
  selector: 'app-visualizer',
  standalone: true,
  templateUrl: './visualizer.component.html',
  styleUrl: './visualizer.component.scss'
})
export class VisualizerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>

  private readonly audioSource = inject(AudioAnalysisSource)
  private readonly destroyRef  = inject(DestroyRef)
  private ctx: CanvasRenderingContext2D | null = null
  private resizeObserver: ResizeObserver | null = null

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement
    this.ctx = canvas.getContext('2d')

    // ResizeObserver keeps canvas pixel width in sync with CSS layout width
    this.resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        canvas.width = entry.contentRect.width
      }
    })
    this.resizeObserver.observe(canvas)

    this.audioSource.frequencyData$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => this.draw(data))
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect()
  }

  private draw(data: Uint8Array): void {
    const canvas = this.canvasRef?.nativeElement
    if (!canvas || !this.ctx) return

    const { width, height } = canvas
    const ctx = this.ctx
    const yScale = scaleLinear([0, 255], [height, 0])
    const barW = width / data.length

    ctx.clearRect(0, 0, width, height)
    data.forEach((value, i) => {
      const barH = height - yScale(value)
      ctx.fillStyle = this.barColor(i / data.length)
      ctx.fillRect(i * barW, yScale(value), Math.max(barW - 1, 1), barH)
    })
  }

  private barColor(t: number): string {
    // Interpolate between --player-fill and --accent using the canvas element's computed style
    // Fall back to reasonable defaults if CSS vars aren't available
    const el = this.canvasRef?.nativeElement
    if (!el) return '#888'
    const style = getComputedStyle(el)
    const fill = style.getPropertyValue('--player-fill').trim() || '#222'
    const accent = style.getPropertyValue('--accent').trim() || '#4caf50'
    return t < 0.5 ? fill : accent
  }
}
