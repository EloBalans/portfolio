import { Project } from './project.model';
import {
  ANGULAR_TECH,
  CANVAS_TECH,
  CYPRESS_TECH,
  GRAPHQL_TECH,
  JEST_TECH,
  JS_TECH,
  NEST_JS_TECH,
  NGXS_TECH,
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
    tech: [ANGULAR_TECH, RX_JS_TECH, TS_TECH, NGXS_TECH],
    description:
      "This application is a bot designed for a popular browser-based game, providing players with advanced automation features to enhance gameplay. The bot includes functionality for loading and creating presets, allowing the player's character to move automatically based on predefined paths. It also enables users to customize which types of enemies the character should attack and features automated healing to keep the character's health maintained during gameplay. These features are designed to offer an optimized and efficient gaming experience, allowing players to focus on strategic elements while the bot handles routine tasks.",
  },
  {
    title: 'EasySolar APP',
    imagesURL: [
      '/assets/projects/easysolar/easysolar-1.png',
      '/assets/projects/easysolar/easysolar-2.png',
      '/assets/projects/easysolar/easysolar-3.png',
    ],
    tech: [ANGULAR_TECH, RX_JS_TECH, TS_TECH, JEST_TECH, CYPRESS_TECH],
    description:
      'I participated in the development of the EasySolar application, which offers features for solar system design, electrical schematic generation, and financial analysis. My role involved collaborating on the implementation of these key functionalities, which allowed me to enhance my skills in solar technology and frontend development',
  },
  {
    title: 'AMRON',
    imagesURL: [
      '/assets/projects/amron/amron-1.png',
      '/assets/projects/amron/amron-2.png',
      '/assets/projects/amron/amron-3.png',
    ],
    tech: [ANGULAR_TECH, RX_JS_TECH, TS_TECH],
    description:
      "I was involved in adding new functionalities and fixing bugs in the system responsible for property registration in Poland. My contributions included implementing enhancements to existing features and resolving various issues to ensure the system's reliability and efficiency. This role allowed me to deepen my expertise in system development and maintenance while working on a crucial component of property management in Poland.",
  },
  {
    title: 'Shooter',
    imagesURL: [
      '/assets/projects/shooter/shooter-1.png',
      '/assets/projects/shooter/shooter-2.png',
      '/assets/projects/shooter/shooter-3.png',
    ],
    tech: [JS_TECH, CANVAS_TECH],
    description:
      'A simple browser game built with HTML5 Canvas and pure JavaScript, where the player must defeat enemies approaching from the left side. The game gets progressively harder, and losing occurs when too many enemies pass through. As levels are completed, new abilities are unlocked, allowing the player to fight more enemies effectively. The game features smooth animations, dynamic difficulty, a leveling system, and a user interface that displays defeated enemies, missed enemies, and unlocked abilities. This project demonstrates the use of Canvas and JavaScript to create a fun, responsive game with increasing challenges and strategic gameplay.',
  },
];
