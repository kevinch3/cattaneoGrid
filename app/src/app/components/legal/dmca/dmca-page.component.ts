import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LegalPageComponent } from '../legal-page/legal-page.component';

@Component({
  selector: 'app-dmca-page',
  imports: [LegalPageComponent],
  templateUrl: './dmca-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DmcaPageComponent {}
