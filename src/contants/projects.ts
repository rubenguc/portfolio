import type { Project } from "../interfaces";
import { technologies } from "./technologies";

export const getProjectFolder = (folder: string) => {
  return `/projects/${folder}/`;
};

export const PROJECTS_IDs: Record<string, string> = {
  BATTLESHIP: "battleship",
  DOKKAN: "dokkanhp",
};

export const PROJECTS_FOLDER = {
  BATTLESHIP: getProjectFolder(PROJECTS_IDs.BATTLESHIP),
  DOKKAN: getProjectFolder(PROJECTS_IDs.DOKKAN),
};

export const getPhotosInFolder = (to: number, folder: string) => {
  let photos = [];

  for (let index = 1; index <= to; index++) {
    photos.push(folder + `${index}.jpg`);
  }

  return photos;
};

export const battleship: Project = {
  id: PROJECTS_IDs.BATTLESHIP,
  mainPhoto: PROJECTS_FOLDER.BATTLESHIP + "5.jpg",
  title: "Battleship",
  description:
    "A simple web-based version of the classic Battleship board game, developed with React and Firebase. The app features a responsive design using Tailwind CSS and includes unit tests to ensure reliable gameplay. Additionally, it is set up with a GitHub Actions workflow that runs tests, builds a Docker image, and publishes it to Docker Hub, along with security analysis through CodeQL.",
  screenshots: getPhotosInFolder(6, PROJECTS_FOLDER.BATTLESHIP),
  repositories: [
    {
      title: "Frontend",
      url: "https://github.com/rubenguc/battleship",
    },
  ],
  links: [
    {
      title: "Web",
      url: "https://battleship-vert.vercel.app",
    },
  ],
  technologies: [
    technologies.REACT,
    technologies.FIREBASE,
    technologies.TAILWIND,
    technologies.VITEST,
    technologies.ZUSTAND,
  ],
};

export const dokkanhp: Project = {
  id: PROJECTS_IDs.DOKKAN,
  mainPhoto: PROJECTS_FOLDER.DOKKAN + "1.jpg",
  title: "Dokkan hidden potentials",
  description: `
    Database for the hidden potential of characters of dokkan battle.
    The hidden potentials on the web may not be the best for any character; these are based on <a class="text-primary hover:text-secondary hover:border-b w-fit" href="https://www.youtube.com/playlist?list=PL96oiZRZyU_Mm3z4WiVp7wfp1H4IFYV9Y" target="_blank">Playmaker's guides</a>
  `,
  screenshots: getPhotosInFolder(2, PROJECTS_FOLDER.DOKKAN),
  repositories: [
    {
      title: "Frontend",
      url: "https://github.com/rubenguc/dokkan-hidden-potentials",
    },
  ],
  links: [
    {
      title: "Web",
      url: "https://dokkan-hidden-potentials.vercel.app/",
    },
  ],
  technologies: [technologies.NEXTJS, technologies.MONGODB],
};

export const PROJECTS = [battleship, dokkanhp];
