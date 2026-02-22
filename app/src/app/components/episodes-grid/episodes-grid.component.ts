import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlayerService } from '../../services/player/player.service'
import { EpisodeExtended, EpisodeSort } from '../../models/episode.model'
import { PlayableContent } from '../../models/playable.model'
import { EpisodesService } from '../../services/episode/episode.service'

// const dataPath = 'assets/db.json'

@Component({
    selector: 'app-episodes-grid',
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './episodes-grid.component.html',
    styleUrl: './episodes-grid.component.scss'
})
export class EpisodesGridComponent implements OnInit {
  public selectedIndex: number | null = null;
  public episodes: EpisodeSort[] = [];
  selectedSortField: string = '_likes'; // Campo de ordenación seleccionado por defecto
  public sortOptions = [
    { value: '_likes', label: 'Likes' },
    { value: '_descargas', label: 'Descargas' },
    { value: '_fecha', label: 'Fecha' },
    { value: '_episodio', label: 'Episodio' }
  ];

  constructor(
    private playerService: PlayerService,
    private episodesService: EpisodesService
  ) { }

  ngOnInit(): void {
    this.episodesService.fetchEpisodes()
      .subscribe({
        next: (data: EpisodeSort[]) => { // Asegúrate de que sea EpisodeSort[]
          this.episodes = data;
          if (
            data.some(episode => !!episode.fechasubida) &&
            !this.sortOptions.find(option => option.value === '_fechasubida')
          ) {
            this.sortOptions = [
              ...this.sortOptions,
              { value: '_fechasubida', label: 'Fecha subida' }
            ];
          }
          this.sortEpisodes(this.selectedSortField);
        },
        error: (error) => {
          console.error('Error fetching episodes:', error);
        }
      });
  }

public onSortChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedSortField = selectElement.value;
    this.selectedIndex = null;
    this.sortEpisodes(this.selectedSortField);
    // console.log('change', this.selectedSortField);
  }
  
  public onEpisodeClick(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index // Esto permite alternar la fila al hacer clic

    const episode = this.episodes[index] // Asegúrate de tener acceso a la lista de episodios
    this.playContent({
      title: episode.titulo,
      link: episode.link ?? '',
      id: episode.episodio ?? ''
    })
  }

  public playContent(content: PlayableContent) {
    this.playerService.performAction('play', content)
  }

  public tracklistWithBreaks(tracklist: string | null | undefined): string {
    if (!tracklist) {
      return ''
    }
    return tracklist.replace(/\n/g, '<br>')
  }

  private sortEpisodes(field: string): void {
    if (!this.episodes.length) {
      return;
    }

    this.episodes = [...this.episodes].sort((a, b) => {
      const aValue = this.getSortableValue(a, field);
      const bValue = this.getSortableValue(b, field);

      if (aValue === null && bValue === null) {
        return 0;
      }
      if (aValue === null) {
        return 1;
      }
      if (bValue === null) {
        return -1;
      }

      return bValue - aValue;
    });
  }

  private getSortableValue(episode: EpisodeSort, field: string): number | null {
    const extendedField = episode[field] as EpisodeExtended | undefined;
    if (!extendedField) {
      return null;
    }

    if (typeof extendedField.number === 'number' && Number.isFinite(extendedField.number)) {
      return extendedField.number;
    }

    const parsed = parseFloat(extendedField.value ?? '');
    return Number.isFinite(parsed) ? parsed : null;
  }
}
