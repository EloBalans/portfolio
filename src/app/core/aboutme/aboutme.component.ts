import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [NgOptimizedImage, CardComponent],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutmeComponent {
  profileSections: string[] = [
    `I am a dedicated Angular developer with over 3 years of experience in frontend design, specializing in creating modern and responsive user interfaces using the latest Angular versions. I have a strong background in API integration, performance optimization, and implementing advanced frontend features to deliver seamless user experiences.`,

    `My hands-on experience in developing applications for the solar energy sector has provided me with a deep understanding of energy systems and data-driven solutions, allowing me to craft innovative solutions tailored to industry-specific needs.`,

    `Additionally, I am proficient in writing and maintaining end-to-end tests using Cypress, ensuring the robustness and reliability of the applications I work on.`,

    `Beyond coding, I am passionate about football, which I enjoy both watching and playing. I also make time for regular workouts at the gym and running, as I believe that staying physically active boosts creativity and problem-solving skills in my work.`,
  ];
}
