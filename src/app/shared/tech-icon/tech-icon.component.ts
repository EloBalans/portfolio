import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Tech } from '../tech/tech.model';

@Component({
  selector: 'app-tech-icon',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './tech-icon.component.html',
  styleUrl: './tech-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechIconComponent {
  tech = input.required<Tech>();
}
