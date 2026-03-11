import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LegalPageComponent } from '../legal-page/legal-page.component';

@Component({
  selector: 'app-terms-page',
  imports: [LegalPageComponent],
  templateUrl: './terms-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsPageComponent {}
