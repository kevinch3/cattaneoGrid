import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LegalPageComponent } from '../legal-page/legal-page.component';

@Component({
  selector: 'app-privacy-page',
  imports: [LegalPageComponent],
  templateUrl: './privacy-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPageComponent {}
