export const TECHNOLOGIES = {
  REACT_NATIVE: "React Native",
  KOTLIN: "Kotlin",
  NEXTJS: "Next.js",
  MONGODB: "MongoDB",
  REACT: "React",
  TYPESCRIPT: "Typescript",
  NEST_JS: "NestJS",
  NODE_JS: "Node.js",
};

export const INFO = {
  hello: "Hi, I'm Rubén",
  heroDescriptions:
    "Software Engineer with over 5 years of experience focused on React, Node.js, and TypeScript. I focus on building useful and functional products that deliver effective and scalable digital experiences.",
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
      company: "KuroDev",
      position: "Full Stack Developer",
      period: "January 2021 - Present",
      responsibilities: [
        "Developed a real-time patient management platform with 5 modules built in React, a mobile app in React Native, and Node.js and Socket.IO for real-time communication. Reducing manual tasks, exam scheduling, digital access to results and wait times through automated SMS alerts (Twillio) and self-service access to exam results.",
        "Built a QR-based student ID system using React and Firebase for payment validation and meal tracking, managing 400+ users with secure QR generation and scanning functionality.",
      ],
    },
    {
      company: "Blockcoders",
      position: "Full Stack Developer",
      period: "August 2022 - June 2024",
      responsibilities: [
        "Built a crypto wallet browser extension using React and TypeScript, delivering 4 milestones funded by the Web3 Foundation (>$10k total) with unit tests in Vitest achieving over 90% coverage.",
        "Migrated a DeFi platform to a TurboRepo monorepo (Next.js + NestJS/GraphQL) and optimized external API handlers, significantly reducing operational costs and improving system maintainability.",
        "Won two Web3 hackathons (>$10k in prizes) by developing high-performance applications with advanced blockchain integrations.",
        "Developed a Node.js SDK for XCM (Cross-Consensus Messaging) on Polkadot, successfully delivering 4 milestones funded by the Web3 Foundation (>$20k total).",
        "Engineered a custom Smart Contract Explorer, delivering multiple funded milestones by the Web3 Foundation (>$2k each); synchronized and queried over 3 million blocks from Polkadot-based chains while maintaining 90%+ test coverage and utilizing MongoDB indexing.",
        "Managed full-cycle deployments on DigitalOcean using Docker and GitHub Actions to automate CI/CD pipelines and ensure 24/7 availability.",
      ],
    },
    {
      company: "Creativos Plus",
      position: "Frontend Developer",
      period: "October 2021 - May 2022",
      responsibilities: [
        "Migrated a legacy CRM system from Django to React, improving load speed by 40% and enabling a more dynamic, scalable frontend. Complemented the web platform with a mobile app built using React Native and Expo.",
        "Integrated Stripe and Google Pay for secure payment processing, supporting both card and mobile wallet transactions, which improved checkout conversion and user experience.",
        "Connected Power BI to the core system to deliver real-time interactive dashboards, providing administrators and end-users with actionable insights and advanced analytics.",
        "Developed a gym management system with React that enabled the management of membership payments, entries, trainers, and clients.",
      ],
    },
    {
      company: "SOFTICO C.A.",
      position: "Backend Developer",
      period: "October 2021 - May 2022",
      responsibilities: [
        "Participated in the migration of a maritime port management system's backend to Node.js, improving maintainability and scalability while leveraging PostgreSQL with stored procedures for complex data operations and transaction integrity.",
        "Built an API to import and process data from Excel files, streamlining bulk data uploads and improving system automation.",
      ],
    },
    {
      company: "Man Solutions",
      position: "Full Stack Developer",
      period: "December 2019 - October 2020",
      responsibilities: [
        "Built a full-stack admin system for small businesses using Vue.js and Node.js to manage products, sales, and customers.",
        "Integrated Socket.IO for real-time support tickets, improving response speed and user communication.",
      ],
    },
  ],
  clientAndCompanyProjects: [
    {
      title: "Kuma wallet",
      description:
        "A non-custodial Web3 browser extension built with React and TypeScript, enabling seamless asset management and dApp interactions across EVM and Polkadot/Kusama networks.",
      photo: "projects/kuma-wallet.svg",
      mainLink: {
        name: "Website",
        url: "https://chromewebstore.google.com/detail/kuma-wallet/hbinmkhlebcnghpikoekkbeljbealbje?pli=1",
      },
      links: [{ url: "https://github.com/kumawallet/extension" }],
      TECHNOLOGIES: [TECHNOLOGIES.REACT, TECHNOLOGIES.TYPESCRIPT],
    },
    {
      title: "XCM-SDK",
      description:
        "A Npm package designed to abstract and simplify complex cross-consensus asset transfers and communication between parachains in the Polkadot and Kusama ecosystems.",
      photo: "projects/github.svg",
      mainLink: {
        name: "NPM",
        url: "https://www.npmjs.com/package/xcm-sdk",
      },
      links: [{ url: "https://github.com/blockcoders/xcm-sdk" }],
      TECHNOLOGIES: [TECHNOLOGIES.NODE_JS],
    },
    {
      title: "ink-explorer",
      description:
        "An open-source React and TypeScript developer interface designed to inspect, trigger, and interact with ink! smart contracts on Substrate-based networks.",
      photo: "projects/github.svg",
      links: [
        {
          name: "Source (Frontend)",
          url: "https://github.com/blockcoders/ink-substrate-explorer-frontend",
        },
        {
          name: "Source (Backend)",
          url: "https://github.com/blockcoders/ink-substrate-explorer-api",
        },
      ],
      TECHNOLOGIES: [
        TECHNOLOGIES.NEXTJS,
        TECHNOLOGIES.NEST_JS,
        TECHNOLOGIES.TYPESCRIPT,
      ],
    },
    {
      title: "Cli Laboratorio",
      description:
        "A mobile app for patients to manage their positions in the queue, view their lab results, budgets and appointments.",
      photo: "projects/cli-laboratorio.png",
      mainLink: {
        name: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.kurodev.labcli&hl=es",
      },
      TECHNOLOGIES: [TECHNOLOGIES.REACT_NATIVE, TECHNOLOGIES.TYPESCRIPT],
    },
    {},
  ],
  personalProjects: [
    {
      title: "Focus: Kuria Mind",
      description:
        "Kuria Mind is an Android application that allows users to manage app usage on their device. By creating blocks, users can select specific apps to restrict their execution and receive notifications about their activity.",
      photo: "projects/kuriamind.png",
      mainLink: {
        name: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.kuriamind",
      },
      links: [{ url: "https://github.com/rubenguc/kuriamind" }],
      technologies: [TECHNOLOGIES.REACT_NATIVE, TECHNOLOGIES.KOTLIN],
      color: "#1d71d7",
    },
    {
      title: "BXZella",
      description:
        "bxzella is a platform designed to help traders analyze their performance by integrating with the BingX API. It allows users to view their transaction history, open positions, and track key trading statistics to make informed decisions and improve their strategies.",
      photo: "projects/bxzella.png",
      mainLink: {
        name: "Demo",
        url: "https://bxzella-demo.vercel.app/",
      },
      links: [{ url: "https://github.com/rubenguc/bxzella" }],
      technologies: [
        TECHNOLOGIES.NEXTJS,
        TECHNOLOGIES.MONGODB,
        TECHNOLOGIES.TYPESCRIPT,
      ],
      color: "#30b6ee",
    },
  ],
};
