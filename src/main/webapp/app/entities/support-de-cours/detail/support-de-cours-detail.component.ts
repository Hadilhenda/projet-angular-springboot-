import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ISupportDeCours } from '../support-de-cours.model';

@Component({
  standalone: true,
  selector: 'jhi-support-de-cours-detail',
  templateUrl: './support-de-cours-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class SupportDeCoursDetailComponent {
  @Input() supportDeCours: ISupportDeCours | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  previousState(): void {
    window.history.back();
  }
}