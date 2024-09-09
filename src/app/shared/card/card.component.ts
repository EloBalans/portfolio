import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage, NgTemplateOutlet],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  title = input<string>('');
}
