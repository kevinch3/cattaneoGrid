// app/src/app/components/header/header.component.ts
import { Component, ChangeDetectionStrategy, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ThemeService } from '../../services/theme/theme.service'
import { SortService } from '../../services/sort/sort.service'
import { MoodService } from '../../lib/heatmap'
import { HeatmapMood } from '../../lib/heatmap/heatmap.types'

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
  readonly mood = inject(MoodService)

  onThemeChange(event: Event): void {
    const select = event.target as HTMLSelectElement
    const index = Number(select.value)
    this.theme.setPreset(this.theme.presets[index])
  }

  onSortChange(event: Event): void {
    const select = event.target as HTMLSelectElement
    this.sort.setField(select.value)
  }

  onMoodChange(event: Event): void {
    const select = event.target as HTMLSelectElement
    this.mood.setMood(select.value as HeatmapMood)
  }
}
