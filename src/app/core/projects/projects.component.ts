import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CarouselComponent} from "../../shared/carousel/carousel.component";
import {CardComponent} from "../../shared/card/card.component";
import {TechBadgeComponent} from "../../shared/tech-badge/tech-badge.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CarouselComponent,
    CardComponent,
    TechBadgeComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'ESG Assistant',
      imagesURL: [
        "/assets/projects/esg/esg-1.png",
        "/assets/projects/esg/esg-2.png",
        "/assets/projects/esg/esg-3.png",
        "/assets/projects/esg/esg-4.png"
      ],
      tech: [
        ANGULAR_TECH,
        RX_JS_TECH,
        GRAPHQL_TECH,
        NEST_JS_TECH
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'App',
      imagesURL: [
        "/assets/projects/esg/esg-1.png",
        "/assets/projects/esg/esg-2.png",
        "/assets/projects/esg/esg-3.png",
        "/assets/projects/esg/esg-4.png"
      ],
      tech: [
        ANGULAR_TECH,
        RX_JS_TECH,
        JEST_TECH,
        CYPRESS_TECH
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
  ]
}


interface Project {
  title: string;
  imagesURL: string[];
  tech: Tech[];
  description: string;
}

const ANGULAR_TECH: Tech = {
  name: "Angular",
  color: "#c62828",
  imageURL: "/assets/icons/angular-icon.png"
};

const RX_JS_TECH: Tech = {
  name: "RxJS",
  color: "#2196f3",
  imageURL: "/assets/icons/rxjs-icon.png"
};

const GRAPHQL_TECH: Tech = {
  name: "GraphQL",
  color: "#8e24aa",
  imageURL: "/assets/icons/graphql-icon.png"
};

const JEST_TECH: Tech = {
  name: "Jest",
  color: "#fbc02d",
  imageURL: "/assets/icons/jest-icon.png"
};

const NEST_JS_TECH: Tech = {
  name: "NestJS",
  color: "#43a047",
  imageURL: "/assets/icons/nest-icon.png"
};

const NGRX_TECH: Tech = {
  name: "NgRx",
  color: "#e53935",
  imageURL: "/assets/icons/ngrx-icon.png"
};

const NGXS_TECH: Tech = {
  name: "NgXS",
  color: "#1e88e5",
  imageURL: "/assets/icons/ngxs-icon.png"
};

const CYPRESS_TECH: Tech = {
  name: "Cypress",
  color: "#4aab4d",
  imageURL: "/assets/icons/cypress-icon.png"
};

export interface Tech {
  name: string;
  color: string;
  imageURL: string;
}
