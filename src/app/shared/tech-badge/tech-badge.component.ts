import {ChangeDetectionStrategy, Component, HostBinding, input} from '@angular/core';
import {Tech} from "../../core/projects/projects.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './tech-badge.component.html',
  styleUrl: './tech-badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechBadgeComponent {

  tech = input.required<Tech>()

  @HostBinding('style.backgroundColor') get backgroundColor() {
    return this.tech().color || 'transparent';
  }
}
