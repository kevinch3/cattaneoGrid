import { Injectable, signal, effect, DestroyRef, inject } from '@angular/core'

export type ThemeStyle = 'legacy' | 'default' | 'minimal-2d'
export type ThemeMode = 'light' | 'dark' | 'system'

export interface ThemePreset {
  label: string
  style: ThemeStyle
  mode: ThemeMode
}

function lsGet(key: string): string | null {
  try { return localStorage.getItem(key) } catch { return null }
}
function lsSet(key: string, value: string): void {
  try { localStorage.setItem(key, value) } catch { /* private mode */ }
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly presets: ThemePreset[] = [
    { label: 'Legacy',              style: 'legacy',    mode: 'light'  },
    { label: 'Default · System',    style: 'default',   mode: 'system' },
    { label: 'Default · Light',     style: 'default',   mode: 'light'  },
    { label: 'Default · Dark',      style: 'default',   mode: 'dark'   },
    { label: 'Minimal 2D · System', style: 'minimal-2d', mode: 'system' },
    { label: 'Minimal 2D · Light',  style: 'minimal-2d', mode: 'light'  },
    { label: 'Minimal 2D · Dark',   style: 'minimal-2d', mode: 'dark'   },
  ]

  private readonly _activePreset = signal<ThemePreset>(this.loadInitialPreset())
  readonly activePreset = this._activePreset.asReadonly()

  private readonly _resolvedMode = signal<'light' | 'dark'>('light')
  readonly resolvedMode = this._resolvedMode.asReadonly()

  private _mediaQuery: MediaQueryList | null = null
  private _mediaListener: (() => void) | null = null
  private readonly destroyRef = inject(DestroyRef)

  constructor() {
    // Compute initial resolved mode
    this.updateResolvedMode(this._activePreset().mode)

    // Apply initial preset
    this.applyPreset()

    // Watch for preset changes to reinitialize system listener
    effect(() => {
      this._activePreset()
      this.initSystemListener()
    })

    // Watch resolved mode changes to update data-mode on body
    effect(() => {
      const mode = this._resolvedMode()
      if (typeof document !== 'undefined') {
        document.body.setAttribute('data-mode', mode)
      }
    })

    // Cleanup on destroy
    this.destroyRef.onDestroy(() => {
      this.removeMediaListener()
    })
  }

  setPreset(preset: ThemePreset): void {
    this._activePreset.set(preset)
    this.applyPreset()
    lsSet('theme-preset', JSON.stringify({ style: preset.style, mode: preset.mode }))
  }

  private loadInitialPreset(): ThemePreset {
    const fallback = this.presets.find(p => p.label === 'Default · System')!
    try {
      const raw = lsGet('theme-preset')
      if (!raw) return fallback
      const saved = JSON.parse(raw) as { style: ThemeStyle; mode: ThemeMode }
      const match = this.presets.find(p => p.style === saved.style && p.mode === saved.mode)
      return match ?? fallback
    } catch {
      return fallback
    }
  }

  private updateResolvedMode(mode: ThemeMode): void {
    if (mode === 'system') {
      const dark = typeof window !== 'undefined'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : false
      this._resolvedMode.set(dark ? 'dark' : 'light')
    } else {
      this._resolvedMode.set(mode)
    }
  }

  private applyPreset(): void {
    const preset = this._activePreset()
    this.updateResolvedMode(preset.mode)
    document.body.setAttribute('data-theme', preset.style)

    const href = `/assets/themes/theme-${preset.style}.css`
    let link = document.getElementById('theme-css') as HTMLLinkElement | null
    if (link) {
      link.href = href
    } else {
      link = document.createElement('link')
      link.id = 'theme-css'
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
    }
  }

  private initSystemListener(): void {
    const preset = this._activePreset()
    this.removeMediaListener()

    if (preset.mode === 'system' && typeof window !== 'undefined') {
      this._mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      this._mediaListener = () => {
        this._resolvedMode.set(this._mediaQuery!.matches ? 'dark' : 'light')
      }
      this._mediaQuery.addEventListener('change', this._mediaListener)
    }
  }

  private removeMediaListener(): void {
    if (this._mediaQuery && this._mediaListener) {
      this._mediaQuery.removeEventListener('change', this._mediaListener)
      this._mediaListener = null
      this._mediaQuery = null
    }
  }
}
