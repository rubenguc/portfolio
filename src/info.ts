export const TECHNOLOGIES = {
  REACT_NATIVE: "React Native",
  KOTLIN: "Kotlin",
  NEXTJS: "Next.js",
  MONGODB: "MongoDB",
};

export const LINKS = {
  GITHUB: "Github",
  PLAY_STORE: "Play Store",
  WEB: "Web",
  WEB_DEMO: "Web (Demo)",
};

export const INFO = {
  hello: "Hi, I'm Rubén",
  heroDescriptions:
    "Software Engineer with +5 years specialized in web application development using React and Node. I focus on building useful and functional products that deliver effective and scalable digital experiences.",
  heroPhoto: "/photo.jpeg",
  email: "rubdeivis@gmail.com",
  contactInfo: [
    {
      platform: "github",
      link: "https://github.com/rubenguc",
      label: "rubenguc",
    },
    {
      platform: "linkedin",
      link: "https://www.linkedin.com/in/rubengutierrezc/",
      label: "rubengutierrezc",
    },
    {
      platform: "cv",
      link: "https://drive.google.com/file/d/1ZsA3RLhyc90-zzR-Sy8tdrhhjunAC1ek/view?usp=sharing",
      label: "View",
    },
  ],
  workExperiences: [
    {
      company: "Blockcoders",
      position: "Software Engineer",
      period: "August 2022 - June 2024",
      responsibilities: [
        "Developed a Web3 wallet compatible with EVM and Polkadot chains, enabling cross-chain transfers and interoperability.",
        "Built a library for XCM message management between Polkadot chains, approved by Web3 Foundation (3 milestones, $10k+ each).",
        "Created a smart contract tracking tool for Polkadot, enhancing on-chain transparency, securing two development milestones valued at over $2k each.",
        "Awards: Won 2 Web3 hackathons (prizes over $5k).",
        "Managed frontend and backend deployments on DigitalOcean, ensuring high availability and performance across multiple environments.",
      ],
    },
    {
      company: "KuroDev",
      position: "Full Stack Developer",
      period: "January 2021 - Present",
      responsibilities: [
        "Developed a web and mobile platform for real-time patient queue tracking, exam scheduling, and digital access to results, reducing manual tasks and wait times through automated SMS alerts and a self-service patient app.",
        "Built a QR-based student ID system to track meal purchases, paired with a parent portal for payment screenshot uploads.",
      ],
      technologies_used: [
        "React",
        "React Native",
        "Redux",
        "Firebase",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Socket.IO",
      ],
    },
    {
      company: "Creativos Plus",
      position: "Frontend Developer",
      period: "October 2021 - May 2022",
      responsibilities: [
        "Migrated CRM system from Django to React and Node.js, improving load speed by 40% and enabling a more dynamic and scalable user experience.",
        "Integrated Stripe and Google Pay for secure card and mobile payments processing, increasing transaction efficiency and enhancing user payment experience.",
        "Connected Power BI to the core system to deliver real-time interactive dashboards, providing administrators and end-users with actionable insights and advanced analytics.",
        "Developed a system for gyms that enabled the management of membership payments, entries, trainers, and clients.",
      ],
    },
    {
      company: "SOFTICO C.A.",
      position: "Backend Developer",
      period: "October 2021 - May 2022",
      responsibilities: [
        "Participated in the migration of the backend for a maritime port management system, migrating it to Node.js and PostgreSQL using stored procedures.",
        "Built an API to import and process data from Excel files, streamlining bulk data uploads and improving system automation.",
      ],
      technologies_used: ["Node.js", "PostgreSQL"],
    },
    {
      company: "Man Solutions",
      position: "Full Stack Developer",
      period: "December 2019 - October 2020",
      responsibilities: [
        "Developed an administrative system that enabled easy management of purchases, products, sales, and customers for small businesses.",
        "Implemented WebSocket integration to handle support tickets in real-time, improving response speed and user communication efficiency.",
      ],
    },
  ],
  personalProjects: [
    {
      title: "Focus: Kuria Mind",
      description:
        "Kuria Mind is an Android application that allows users to manage app usage on their device. By creating blocks, users can select specific apps to restrict their execution and receive notifications about their activity.",
      photo: "projects/kuriamind.jpg",
      github_url: "https://github.com/rubenguc/kuriamind",
      link: {
        type: LINKS.PLAY_STORE,
        url: "https://play.google.com/store/apps/details?id=com.kuriamind",
      },
      technologies: [TECHNOLOGIES.REACT_NATIVE, TECHNOLOGIES.KOTLIN],
    },
    {
      title: "Dokkan hidden potentials",
      description: `Database for the hidden potential of characters of dokkan battle.
     The hidden potentials on the web may not be the best for any character; these are based on <a class="embedded-link" href="https://www.youtube.com/playlist?list=PL96oiZRZyU_Mm3z4WiVp7wfp1H4IFYV9Y" target="_blank">Playmaker's guides</a>`,
      photo: "projects/dokkanhp.jpg",
      github_url: "https://github.com/rubenguc/dokkan-hidden-potentials",
      link: {
        type: LINKS.WEB,
        url: "https://dokkan-hidden-potentials.vercel.app/",
      },
      technologies: [TECHNOLOGIES.NEXTJS, TECHNOLOGIES.MONGODB],
    },
    {
      title: "BXZella",
      description:
        "bxzella is a platform designed to help traders analyze their performance by integrating with the BingX API. It allows users to view their transaction history, open positions, and track key trading statistics to make informed decisions and improve their strategies.",
      photo: "projects/bxzella.jpg",
      github_url: "https://github.com/rubenguc/bxzella",
      link: {
        type: LINKS.WEB_DEMO,
        url: "https://bxzella-demo.vercel.app/",
      },
      technologies: [TECHNOLOGIES.NEXTJS, TECHNOLOGIES.MONGODB],
    },
  ],
};
