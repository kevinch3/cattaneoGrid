import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Episode, EpisodeExtended, EpisodeSort } from '../../models/episode.model'
import { scaleLinear, ScaleLinear } from 'd3-scale';

@Injectable({
  providedIn: 'root'
})

export class EpisodesService {
  constructor(private httpClient: HttpClient) {}

  public fetchEpisodes(): Observable<EpisodeSort[]> {
    const dataPath = 'assets/db.json';

    return this.httpClient.get<Episode[]>(dataPath).pipe(
      map(episodes => {
        const likesValues = episodes.map(episode => this.parseIntegerField(episode.likes));
        const descargasValues = episodes.map(episode => this.parseDescargas(episode.descargas));
        const fechaValues = episodes.map(episode => this.parseDateField(episode.fecha));
        const fechaSubidaValues = episodes.map(episode => this.parseDateField(episode.fechasubida));
        const episodioValues = episodes.map(episode => this.parseIntegerField(episode.episodio));

        const colorScaleLikes = this.createColorScale(this.getMaxValue(likesValues));
        const colorScaleDescargas = this.createColorScale(this.getMaxValue(descargasValues));
        const colorScaleFecha = this.createColorScale(this.getMaxValue(fechaValues));
        const colorScaleFechasubida = this.createColorScale(this.getMaxValue(fechaSubidaValues));
        const colorScaleEpisodio = this.createColorScale(this.getMaxValue(episodioValues), 1);

        return episodes.map(episode =>
          this.convertToEpisodeSort(
            episode,
            colorScaleLikes,
            colorScaleDescargas,
            colorScaleFecha,
            colorScaleFechasubida,
            colorScaleEpisodio
          )
        );
      })
    );
  }


  private convertToEpisodeSort(
    episode: Episode,
    colorScaleLikes: ScaleLinear<string, string> | null,
    colorScaleDescargas: ScaleLinear<string, string> | null,
    colorScaleFecha: ScaleLinear<string, string> | null,
    colorScaleFechasubida: ScaleLinear<string, string> | null,
    colorScaleEpisodio: ScaleLinear<string, string> | null
  ): EpisodeSort {
    const likesNumber = this.parseIntegerField(episode.likes);
    const descargasNumber = this.parseDescargas(episode.descargas);
    const fechaTimestamp = this.parseDateField(episode.fecha);
    const fechasubidaTimestamp = this.parseDateField(episode.fechasubida);
    const episodioNumber = this.parseIntegerField(episode.episodio);
    const tracklist = episode.tracklist ?? episode.descripcion ?? '';
    
    return {
      ...episode,
      tracklist,
      _fechasubida: this.createExtendedField(
        episode.fechasubida ?? '',
        fechasubidaTimestamp,
        this.resolveColor(colorScaleFechasubida, fechasubidaTimestamp)
      ),
      _fecha: this.createExtendedField(
        episode.fecha ?? '',
        fechaTimestamp,
        this.resolveColor(colorScaleFecha, fechaTimestamp)
      ),
      _descargas: this.createExtendedField(
        episode.descargas ?? '',
        descargasNumber,
        this.resolveColor(colorScaleDescargas, descargasNumber)
      ),
      _likes: this.createExtendedField(
        episode.likes ?? '',
        likesNumber,
        this.resolveColor(colorScaleLikes, likesNumber)
      ),
      _episodio: this.createExtendedField(
        episode.episodio ?? '',
        episodioNumber,
        this.resolveColor(colorScaleEpisodio, episodioNumber)
      )
    };
  }


  private createExtendedField(value: string | null | undefined, number: number | null = null, color: string = 'grey'): EpisodeExtended {
    return { value: value ?? '', number, color };
  }

  private parseDescargas(descargas: string | null | undefined): number | null {
    if (typeof descargas !== 'string') {
      return null;
    }
    const trimmed = descargas.trim();
    if (!trimmed) {
      return null;
    }

    const multiplier = trimmed.toLowerCase().endsWith('k') ? 1000 : 1;
    const numericPortion = parseFloat(trimmed);
    if (!Number.isFinite(numericPortion)) {
      return null;
    }

    return numericPortion * multiplier;
  }

  private parseIntegerField(value: string | null | undefined): number | null {
    if (typeof value !== 'string') {
      return null;
    }
    const parsed = parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : null;
  }

  private parseDateField(value: string | null | undefined): number | null {
    if (typeof value !== 'string') {
      return null;
    }

    const timestamp = new Date(value).getTime();
    return Number.isFinite(timestamp) ? timestamp : null;
  }

  private getMaxValue(values: Array<number | null>): number | null {
    const validValues = values.filter((value): value is number => typeof value === 'number' && Number.isFinite(value));
    return validValues.length ? Math.max(...validValues) : null;
  }

  private createColorScale(maxValue: number | null, domainStart: number = 0): ScaleLinear<string, string> | null {
    if (maxValue === null) {
      return null;
    }

    const start = Math.min(domainStart, maxValue);
    return scaleLinear<string>().domain([start, maxValue]).range(['green', 'red']);
  }

  private resolveColor(scale: ScaleLinear<string, string> | null, value: number | null): string {
    if (!scale || value === null) {
      return 'grey';
    }

    return scale(value);
  }
}
