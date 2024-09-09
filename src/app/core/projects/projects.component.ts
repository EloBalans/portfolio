import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { CardComponent } from '../../shared/card/card.component';
import { TechBadgeComponent } from '../../shared/tech-badge/tech-badge.component';
import { Project } from '../../shared/project/project.model';
import { PROJECTS } from '../../shared/project/project.const';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CarouselComponent,
    CardComponent,
    TechBadgeComponent,
    NgOptimizedImage,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;

  goTo(url: string) {
    window.open(url, '_blank');
  }
}
