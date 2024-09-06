import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('HomePage <=> AboutMePage', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate(
          '0.5s ease-in-out',
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
      transition('AboutMePage <=> ProjectsPage', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate(
          '0.5s ease-in-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'portfolio';

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
