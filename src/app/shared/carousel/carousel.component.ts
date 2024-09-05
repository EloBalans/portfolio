import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';
import {NgClass, NgOptimizedImage, NgStyle} from "@angular/common";
import {animate, style, transition, trigger, useAnimation} from "@angular/animations";
import {fadeIn, fadeOut, scaleIn, scaleOut} from "./carousel.animations";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgStyle,
    NgClass,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => *", [useAnimation(scaleIn, {params: { time: '500ms' }} )]),
      transition("* => void", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent {


  images = input.required<string[]>();

  index = signal< number>(0);

  goToPrevious(){
    this.index.update(val => (val - 1 + this.images().length) % this.images().length);

  }

  goToNext(){
    this.index.update(val => (val + 1) % this.images().length);
  }

  goTo(i:number){
    this.index.set(i)
  }
}
