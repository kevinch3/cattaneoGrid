import { Injectable, signal, effect } from '@angular/core'

export type ThemeStyle = 'legacy' | 'default' | 'minimal-2d'
export type ThemeMode  = 'light' | 'dark'

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly style = signal<ThemeStyle>(
    (localStorage.getItem('theme-style') as ThemeStyle) ?? 'default'
  )
  readonly mode = signal<ThemeMode>(
    (localStorage.getItem('theme-mode') as ThemeMode) ?? 'light'
  )

  constructor() {
    effect(() => {
      const s = this.style()
      const m = this.mode()
      document.body.setAttribute('data-theme', s)
      document.body.setAttribute('data-mode', m)
      localStorage.setItem('theme-style', s)
      localStorage.setItem('theme-mode', m)
    })
  }

  setStyle(style: ThemeStyle): void {
    this.style.set(style)
  }

  toggleMode(): void {
    this.mode.update(m => m === 'light' ? 'dark' : 'light')
  }
}
