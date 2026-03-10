// app/src/app/components/header/header.component.ts
import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ThemeService, ThemeStyle } from '../../services/theme/theme.service'
import { SortService } from '../../services/sort/sort.service'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected theme = inject(ThemeService)
  protected sort  = inject(SortService)

  protected readonly themeOptions: { value: ThemeStyle; label: string }[] = [
    { value: 'legacy',     label: 'LEGACY' },
    { value: 'default',    label: 'DEFAULT' },
    { value: 'minimal-2d', label: 'MINIMAL 2D' },
  ]

  protected readonly showModeToggle = computed(() => this.theme.style() !== 'legacy')
  protected readonly isDark         = computed(() => this.theme.mode() === 'dark')

  setTheme(style: ThemeStyle): void {
    this.theme.setStyle(style)
  }

  toggleMode(): void {
    this.theme.toggleMode()
  }

  onSortChange(event: Event): void {
    const select = event.target as HTMLSelectElement
    this.sort.setField(select.value)
  }
}
