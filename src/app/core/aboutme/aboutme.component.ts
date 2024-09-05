import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {CardComponent} from "../../shared/card/card.component";

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CardComponent
  ],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutmeComponent {


  aboutMeCardContent: string = 'Dedicated Angular Developer with over 3 years of experience in frontend design. I specialize in creating modern and responsive user interfaces using the latest Angular versions.'
    aboutMeCardContent2: string =   'I have hands-on experience developing applications for the solar energy sector, which has provided me with a deep understanding of the specifics of energy systems and data-driven solutions.'
    aboutMeCardContent3: string =   'My skills also include API integration, performance optimization, and implementing advanced frontend features. I am passionate about crafting innovative technological solutions and am always striving to enhance my skills in the rapidly evolving IT landscape.'
}
