import { Project } from './project.model';
import {
  ANGULAR_TECH,
  GRAPHQL_TECH,
  NEST_JS_TECH,
  RX_JS_TECH,
  TS_TECH,
} from '../tech/tech.const';

export const PROJECTS: Project[] = [
  {
    title: 'ESG Assistant',
    imagesURL: [
      '/assets/projects/esg/esg-1.png',
      '/assets/projects/esg/esg-2.png',
      '/assets/projects/esg/esg-3.png',
      '/assets/projects/esg/esg-4.png',
    ],
    tech: [ANGULAR_TECH, RX_JS_TECH, GRAPHQL_TECH, NEST_JS_TECH, TS_TECH],
    description:
      'The ESG Reporting Management application is being developed to help businesses and organizations efficiently manage and report on their Environmental, Social, and Governance (ESG) data. The platform enables users to add, edit, and organize ESG reports, tracking essential sustainability metrics such as carbon emissions, social impact, and governance practices. Additionally, the application provides document management features and an automated reporting system that generates summaries based on the inputted data. Its user-friendly interface ensures seamless navigation through reports and data filtering, all while prioritizing data security and privacy. Built using Angular, the application delivers a fast and responsive experience on both desktop and mobile devices.',
  },
  {
    title: 'Bot',
    imagesURL: [
      '/assets/projects/bot/bot-1.png',
      '/assets/projects/bot/bot-2.png',
      '/assets/projects/bot/bot-3.png',
      '/assets/projects/bot/bot-4.png',
    ],
    tech: [ANGULAR_TECH, RX_JS_TECH, TS_TECH],
    description:
      "This application is a bot designed for a popular browser-based game, providing players with advanced automation features to enhance gameplay. The bot includes functionality for loading and creating presets, allowing the player's character to move automatically based on predefined paths. It also enables users to customize which types of enemies the character should attack and features automated healing to keep the character's health maintained during gameplay. These features are designed to offer an optimized and efficient gaming experience, allowing players to focus on strategic elements while the bot handles routine tasks.",
  },
];
