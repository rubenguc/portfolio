export interface WorkExperience {
  company: string;
  role: string;
  hits: string[];
  technologies: string[];
}

interface Link {
  type: PROJECT_TYPE;
  title: string;
  url: string;
}

export enum PROJECT_TYPE {
  REPO = "REPO",
  PREVIEW = "Preview",
}

export interface Project {
  id: string;
  mainPhoto: string;
  title: string;
  description: string;
  links: Link[];
  screenshots: string[];
  technologies: string[];
}
