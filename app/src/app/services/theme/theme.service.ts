import { Injectable, signal, effect } from '@angular/core'

export type ThemeStyle = 'legacy' | 'default' | 'minimal-2d'
export type ThemeMode  = 'light' | 'dark'

function lsGet(key: string): string | null {
  try { return localStorage.getItem(key) } catch { return null }
}
function lsSet(key: string, value: string): void {
  try { localStorage.setItem(key, value) } catch { /* private mode */ }
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly style = signal<ThemeStyle>(
    (lsGet('theme-style') as ThemeStyle) ?? 'default'
  )
  readonly mode = signal<ThemeMode>(
    (lsGet('theme-mode') as ThemeMode) ?? 'light'
  )

  constructor() {
    effect(() => {
      const s = this.style()
      const m = this.mode()
      document.body.setAttribute('data-theme', s)
      document.body.setAttribute('data-mode', m)
      lsSet('theme-style', s)
      lsSet('theme-mode', m)
    })
  }

  setStyle(style: ThemeStyle): void {
    this.style.set(style)
  }

  toggleMode(): void {
    this.mode.update(m => m === 'light' ? 'dark' : 'light')
  }
}
