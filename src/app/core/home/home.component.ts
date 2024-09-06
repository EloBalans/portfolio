import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Tech } from '../../shared/tech/tech.model';
import { MAIN_TECHS } from '../../shared/tech/tech.const';
import { TechIconComponent } from '../../shared/tech-icon/tech-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, TechIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  techs: Tech[] = MAIN_TECHS;

  downloadResume() {
    const path = '/assets/cv/Mateusz_Zatoń-Angular_Developer.pdf';
    const link = document.createElement('a');
    link.href = path;
    link.download = 'Mateusz_Zatoń-Angular_Developer.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
