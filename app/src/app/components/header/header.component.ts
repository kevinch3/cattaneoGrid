import { Component, ChangeDetectionStrategy, HostListener, ElementRef, inject, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ThemeService } from '../../services/theme/theme.service'
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
  private readonly elRef = inject(ElementRef)

  protected openMenu = signal<'theme' | 'sort' | null>(null)

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elRef.nativeElement.contains(event.target as Node)) {
      this.openMenu.set(null)
    }
  }

  toggleMenu(menu: 'theme' | 'sort', event: MouseEvent): void {
    event.stopPropagation()
    this.openMenu.update(current => current === menu ? null : menu)
  }

  selectTheme(index: number): void {
    this.theme.setPreset(this.theme.presets[index])
    this.openMenu.set(null)
  }

  selectSort(value: string): void {
    this.sort.setField(value)
    this.openMenu.set(null)
  }
}
