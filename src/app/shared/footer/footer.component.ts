import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { GITHUB_URL, LINKEDIN_URL } from '../url/urls.const';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  mail = 'email: m.zaton@poczta.onet.pl';

  nr = 'number: +48 734 138 585';

  goToGit() {
    window.open(GITHUB_URL, '_blank');
  }

  goToLinkedin() {
    window.open(LINKEDIN_URL, '_blank');
  }
}
