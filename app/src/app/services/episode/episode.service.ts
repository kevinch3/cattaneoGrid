import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Episode, EpisodeExtended, EpisodeSort } from '../../models/episode.model';
import rawEpisodes from '../../../assets/db.json';

type ColorScale = ((value: number) => string) | null;

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  public fetchEpisodes(): Observable<EpisodeSort[]> {
    const episodes = rawEpisodes as unknown as Episode[];

    const likesValues = episodes.map(episode => this.parseIntegerField(episode.likes));
    const descargasValues = episodes.map(episode => this.parseDescargas(episode.descargas));
    const fechaValues = episodes.map(episode => this.parseDateField(episode.fecha));
    const fechaSubidaValues = episodes.map(episode => this.parseDateField(episode.fechasubida));
    const episodioValues = episodes.map(episode => this.parseIntegerField(episode.episodio));

    const colorScaleLikes = this.createColorScale(this.getMinValue(likesValues), this.getMaxValue(likesValues));
    const colorScaleDescargas = this.createColorScale(this.getMinValue(descargasValues), this.getMaxValue(descargasValues));
    const colorScaleFecha = this.createColorScale(this.getMinValue(fechaValues), this.getMaxValue(fechaValues));
    const colorScaleFechasubida = this.createColorScale(this.getMinValue(fechaSubidaValues), this.getMaxValue(fechaSubidaValues));
    const colorScaleEpisodio = this.createColorScale(this.getMinValue(episodioValues), this.getMaxValue(episodioValues));

    return of(
      episodes.map(episode =>
        this.convertToEpisodeSort(
          episode,
          colorScaleLikes,
          colorScaleDescargas,
          colorScaleFecha,
          colorScaleFechasubida,
          colorScaleEpisodio
        )
      )
    );
  }


  private convertToEpisodeSort(
    episode: Episode,
    colorScaleLikes: ColorScale,
    colorScaleDescargas: ColorScale,
    colorScaleFecha: ColorScale,
    colorScaleFechasubida: ColorScale,
    colorScaleEpisodio: ColorScale
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

  private getMinValue(values: Array<number | null>): number | null {
    let min: number | null = null;
    for (const v of values) {
      if (typeof v === 'number' && Number.isFinite(v) && (min === null || v < min)) {
        min = v;
      }
    }
    return min;
  }

  private getMaxValue(values: Array<number | null>): number | null {
    let max: number | null = null;
    for (const v of values) {
      if (typeof v === 'number' && Number.isFinite(v) && (max === null || v > max)) {
        max = v;
      }
    }
    return max;
  }

  // Linear interpolation from CSS green (#008000 = rgb(0,128,0)) to red (#ff0000 = rgb(255,0,0))
  private createColorScale(minValue: number | null, maxValue: number | null): ColorScale {
    if (minValue === null || maxValue === null) {
      return null;
    }
    const range = maxValue - minValue;
    return (value: number) => {
      const t = range > 0 ? (value - minValue) / range : 0;
      const r = Math.round(255 * t);
      const g = Math.round(128 * (1 - t));
      return `rgb(${r},${g},0)`;
    };
  }

  private resolveColor(scale: ColorScale, value: number | null): string {
    if (!scale || value === null) {
      return 'grey';
    }
    return scale(value);
  }
}
