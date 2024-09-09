import { Tech } from '../tech/tech.model';

export interface Project {
  title: string;
  imagesURL: string[];
  tech: Tech[];
  description: string;
  page?: {
    url: string;
    icon: string;
  };
}
