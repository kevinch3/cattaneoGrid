// app/src/app/app.component.ts
import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { EpisodePlayerComponent } from './components/episode-player/episode-player.component'
import { ThemeService } from './services/theme/theme.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, EpisodePlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Injection triggers the ThemeService effect, writing data-theme/data-mode to body
  // before any child component renders.
  private _theme = inject(ThemeService)
}
