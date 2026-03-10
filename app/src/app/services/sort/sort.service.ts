import { Injectable, signal } from '@angular/core'

export interface SortOption {
  value: string
  label: string
}

@Injectable({ providedIn: 'root' })
export class SortService {
  readonly options = signal<SortOption[]>([
    { value: '_likes', label: 'Likes' },
    { value: '_descargas', label: 'Descargas' },
    { value: '_fecha', label: 'Fecha' },
    { value: '_episodio', label: 'Episodio' },
  ])

  readonly selectedField = signal<string>('_likes')

  setField(value: string): void {
    this.selectedField.set(value)
  }

  addOption(option: SortOption): void {
    if (!this.options().find(o => o.value === option.value)) {
      this.options.update(opts => [...opts, option])
    }
  }
}
