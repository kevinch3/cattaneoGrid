import { Injectable, DestroyRef, inject, signal, WritableSignal, Signal, effect } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { EpisodeSort } from '../../models/episode.model'
import { ColorSource, HeatmapEvent } from './heatmap.types'
import { MoodService } from './mood.service'

@Injectable({ providedIn: 'root' })
export class HeatmapColorService {
  private readonly moodService = inject(MoodService)
  private readonly destroyRef = inject(DestroyRef)

  private episodeBaseColors: Map<string, string> = new Map()
  private episodeSignals: Map<string, WritableSignal<string>> = new Map()
  private registeredSources: ColorSource[] = []

  constructor() {
    effect(() => {
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
    const ids = event.episodeId !== undefined
      ? [event.episodeId]
      : [...this.episodeSignals.keys()]

    for (const id of ids) {
      const sig = this.episodeSignals.get(id)
      if (!sig) continue
      // applyToBase: apply modifier to the original base color to prevent energy compounding
      const input = event.applyToBase
        ? (this.episodeBaseColors.get(id) ?? 'rgb(128,128,128)')
        : sig()
      sig.set(event.colorModifier(input))
    }
  }

  private reapplyMood(): void {
    const currentMood = this.moodService.currentMood()
    const palette = this.moodService.palettes[currentMood]

    for (const [id, sig] of this.episodeSignals) {
      const base = this.episodeBaseColors.get(id) ?? 'rgb(128,128,128)'
      sig.set(palette(base))
    }
  }
}
