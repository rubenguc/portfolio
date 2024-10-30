export interface WorkExperience {
  company: string;
  role: string;
  hits: string[];
  technologies: string[];
}

interface Link {
  title: string;
  url: string;
}

export interface Project {
  id: string;
  mainPhoto: string;
  title: string;
  description: string;
  links?: Link[];
  repositories: Link[];
  screenshots: string[];
  technologies: string[];
}
