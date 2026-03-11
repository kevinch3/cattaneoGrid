import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, inject, effect } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlayerService } from '../../services/player/player.service'
import { EpisodeExtended, EpisodeSort } from '../../models/episode.model'
import { PlayableContent } from '../../models/playable.model'
import { EpisodesService } from '../../services/episode/episode.service'
import { SortService } from '../../services/sort/sort.service'
import { ThemeService } from '../../services/theme/theme.service'

@Component({
  selector: 'app-episodes-grid',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './episodes-grid.component.html',
  styleUrl: './episodes-grid.component.scss'
})
export class EpisodesGridComponent implements OnInit {
  public selectedIndex: number | null = null
  public episodes: EpisodeSort[] = []
  public animatingSort = false  // triggers glitch animation on sort change
  protected Math = Math  // expose Math to template for animation delay capping

  private playerService  = inject(PlayerService)
  private episodesService = inject(EpisodesService)
  private cdr            = inject(ChangeDetectorRef)
  protected sort         = inject(SortService)
  protected theme        = inject(ThemeService)

  constructor() {
    effect(() => {
      const field = this.sort.selectedField()
      if (this.episodes.length) {
        this.selectedIndex = null
        this.triggerSortAnimation()
        this.sortEpisodes(field)
        this.cdr.markForCheck()
      }
    })
  }

  ngOnInit(): void {
    this.episodesService.fetchEpisodes().subscribe({
      next: (data: EpisodeSort[]) => {
        this.episodes = data
        if (data.some(e => !!e.fechasubida)) {
          this.sort.addOption({ value: '_fechasubida', label: 'Fecha subida' })
        }
        this.sortEpisodes(this.sort.selectedField())
        this.cdr.markForCheck()
      },
      error: (err) => console.error('Error fetching episodes:', err)
    })
  }

  private triggerSortAnimation(): void {
    if (this.theme.activePreset().style !== 'minimal-2d') return
    this.animatingSort = true
    setTimeout(() => { this.animatingSort = false; this.cdr.markForCheck() }, 800)
  }

  public onEpisodeClick(index: number): void {
    this.selectedIndex = this.selectedIndex === index ? null : index
    const episode = this.episodes[index]
    this.playContent({ title: episode.titulo, link: episode.link ?? '', id: episode.episodio ?? '' })
    if (this.selectedIndex !== null) {
      setTimeout(() => document.querySelector('.episode-detail-row')?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
    }
  }

  public playContent(content: PlayableContent): void {
    this.playerService.performAction('play', content)
  }

  // Used by legacy-sort-wrap dropdown in template (consistent pattern with HeaderComponent)
  public onLegacySortChange(event: Event): void {
    const select = event.target as HTMLSelectElement
    this.sort.setField(select.value)
  }

  public tracklistWithBreaks(tracklist: string | null | undefined): string {
    if (!tracklist) return ''
    return tracklist.replace(/\n/g, '<br>')
  }

  public trackCount(tracklist: string | null | undefined): number {
    if (!tracklist) return 0
    return tracklist.split('\n').filter(l => l.trim()).length
  }

  private sortEpisodes(field: string): void {
    if (!this.episodes.length) return
    this.episodes = [...this.episodes].sort((a, b) => {
      const av = this.getSortableValue(a, field)
      const bv = this.getSortableValue(b, field)
      if (av === null && bv === null) return 0
      if (av === null) return 1
      if (bv === null) return -1
      return bv - av
    })
  }

  private getSortableValue(episode: EpisodeSort, field: string): number | null {
    const ext = episode[field] as EpisodeExtended | undefined
    if (!ext) return null
    if (typeof ext.number === 'number' && Number.isFinite(ext.number)) return ext.number
    const parsed = parseFloat(ext.value ?? '')
    return Number.isFinite(parsed) ? parsed : null
  }
}
