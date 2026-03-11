import { Injectable, NgZone, DestroyRef, inject, signal, WritableSignal, Signal, effect } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { EpisodeSort } from '../../models/episode.model'
import { ColorSource, HeatmapEvent } from './heatmap.types'
import { MoodService } from './mood.service'

@Injectable({ providedIn: 'root' })
export class HeatmapColorService {
  private readonly moodService = inject(MoodService)
  private readonly ngZone = inject(NgZone)
  private readonly destroyRef = inject(DestroyRef)

  private episodeBaseColors: Map<string, string> = new Map()
  private episodeSignals: Map<string, WritableSignal<string>> = new Map()
  private registeredSources: ColorSource[] = []

  constructor() {
    effect(() => {
      // Track mood changes and reapply
      this.moodService.currentMood()
      this.reapplyMood()
    })

    this.destroyRef.onDestroy(() => {
      for (const source of this.registeredSources) {
        source.destroy()
      }
    })
  }

  initEpisodes(episodes: EpisodeSort[], field: string): void {
    this.episodeBaseColors.clear()
    this.episodeSignals.clear()

    const currentMood = this.moodService.currentMood()
    const palette = this.moodService.palettes[currentMood]

    for (const episode of episodes) {
      const id = episode.link
      if (id === null) continue

      const baseColor: string = episode[field]?.color ?? 'rgb(128,128,128)'
      this.episodeBaseColors.set(id, baseColor)

      const initialColor = palette(baseColor)
      this.episodeSignals.set(id, signal(initialColor))
    }
  }

  getColor(episodeId: string): Signal<string> {
    return this.episodeSignals.get(episodeId) ?? signal('rgb(128,128,128)')
  }

  registerSource(source: ColorSource): void {
    this.registeredSources.push(source)

    source.events$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(event => this.handleEvent(event))
  }

  private handleEvent(event: HeatmapEvent): void {
    if (event.episodeId !== undefined) {
      const sig = this.episodeSignals.get(event.episodeId)
      if (sig) {
        this.ngZone.run(() => {
          sig.set(event.colorModifier(sig()))
        })
      }
    } else {
      this.ngZone.run(() => {
        for (const [, sig] of this.episodeSignals) {
          sig.set(event.colorModifier(sig()))
        }
      })
    }
  }

  private reapplyMood(): void {
    const currentMood = this.moodService.currentMood()
    const palette = this.moodService.palettes[currentMood]

    this.ngZone.run(() => {
      for (const [id, sig] of this.episodeSignals) {
        const base = this.episodeBaseColors.get(id) ?? 'rgb(128,128,128)'
        sig.set(palette(base))
      }
    })
  }
}
