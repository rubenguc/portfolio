import { PROJECT_TYPE, type Project } from "../interfaces";
import { technologies } from "./technologies";

export const getProjectFolder = (folder: string) => {
  return `/projects/${folder}/`;
};

export const PROJECTS_IDs: Record<string, string> = {
  BATTLESHIP: "battleship",
  DOKKAN: "dokkanhp",
  KURIAMIND: "kuriamind",
};

export const PROJECTS_FOLDER = {
  BATTLESHIP: getProjectFolder(PROJECTS_IDs.BATTLESHIP),
  DOKKAN: getProjectFolder(PROJECTS_IDs.DOKKAN),
  KURIAMIND: getProjectFolder(PROJECTS_IDs.KURIAMIND),
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
  links: [
    {
      type: PROJECT_TYPE.REPO,
      title: "Repo",
      url: "https://github.com/rubenguc/battleship",
    },
    {
      type: PROJECT_TYPE.PREVIEW,
      title: "Preview",
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
  links: [
    {
      type: PROJECT_TYPE.REPO,
      title: "repo",
      url: "https://github.com/rubenguc/dokkan-hidden-potentials",
    },
    {
      type: PROJECT_TYPE.PREVIEW,
      title: "Preview",
      url: "https://dokkan-hidden-potentials.vercel.app/",
    },
  ],
  technologies: [technologies.NEXTJS, technologies.MONGODB],
};

export const kuriamind: Project = {
  id: PROJECTS_IDs.KURIAMIND,
  mainPhoto: PROJECTS_FOLDER.KURIAMIND + "1.jpg",
  title: "Focus: Kuria Mind",
  description:
    "Kuria Mind is an Android application that allows users to manage app usage on their device. By creating blocks, users can select specific apps to restrict their execution and receive notifications about their activity.",
  screenshots: getPhotosInFolder(6, PROJECTS_FOLDER.KURIAMIND),
  links: [
    {
      type: PROJECT_TYPE.REPO,
      title: "repo",
      url: "https://github.com/rubenguc/kuriamind",
    },
  ],
  technologies: [technologies.REACT_NATIVE, technologies.KOTLIN],
};

export const PROJECTS = [battleship, dokkanhp, kuriamind];
