import { Observable } from 'rxjs'

export type ColorModifier = (baseColor: string) => string

export interface HeatmapEvent {
  type: 'player-state' | 'mouse' | 'audio'
  episodeId?: string      // undefined = affects all tiles
  colorModifier: ColorModifier
  applyToBase?: boolean   // apply modifier to stored base color instead of current signal value
}

export interface ColorSource {
  readonly events$: Observable<HeatmapEvent>
  destroy(): void
}
