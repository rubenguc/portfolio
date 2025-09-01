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
    "Software Engineer with over 4 years of experience focused on React, Node.js, and TypeScript. I focus on building useful and functional products that deliver effective and scalable digital experiences.",
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
        "Built a QR-based student ID system using React and Firebase for payment validation and meal tracking, managing 400+ users (students and school staff) with secure QR generation and scanning functionality.",
      ],
    },
    {
      company: "Blockcoders",
      position: "Software Engineer",
      period: "August 2022 - June 2024",
      responsibilities: [
        "Built a crypto wallet browser extension, delivering 4 milestones funded by the Web3 Foundation (>$7k each) with unit tests written in Vitest achieving over 90% coverage.",
        "Migrated a DeFi platform to a monorepo architecture using TurboRepo, unifying Next.js and NestJS + GraphQL. Modernized UI components, completed core features, and implemented token staking functionality with secure on-chain interactions via Ethers.js/Viem and real-time pricing via CoinGecko API.",
        "Won two Web3 hackathons (>$5k each) by developing web applications with Next.js and wallet integrations.",
        "Developed a Node.js SDK to send XCM (Cross-Consensus Messaging) transactions on the Polkadot network, securing 4 milestones approved by the Web3 Foundation (>$10k each).",
        "Created a smart contract explorer for Polkadot-based chains. Implemented batch processing to sync over 3 million blocks and optimized data retrieval through indexing in MongoDB. Delivered 2 funded milestones (>$2k each) with 90%+ test coverage using Jest.",
        "Assisted in fixing a race condition bug in Zombienet, an open-source tool used to run and test Polkadot nodes.",
        "Managed end-to-end deployments of frontend and backend services on DigitalOcean, using Docker and GitHub Actions for CI/CD.",
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
        "Participated in the migration of a maritime port management system’s backend to Node.js, improving maintainability and scalability while leveraging PostgreSQL with stored procedures for complex data operations and transaction integrity.",
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
  personalProjects: [
    {
      title: "Focus: Kuria Mind",
      description:
        "Kuria Mind is an Android application that allows users to manage app usage on their device. By creating blocks, users can select specific apps to restrict their execution and receive notifications about their activity.",
      photo: "projects/kuriamind.png",
      github_url: "https://github.com/rubenguc/kuriamind",
      link: {
        type: LINKS.PLAY_STORE,
        url: "https://play.google.com/store/apps/details?id=com.kuriamind",
      },
      technologies: [TECHNOLOGIES.REACT_NATIVE, TECHNOLOGIES.KOTLIN],
      color: "#1d71d7",
    },
    {
      title: "BXZella",
      description:
        "bxzella is a platform designed to help traders analyze their performance by integrating with the BingX API. It allows users to view their transaction history, open positions, and track key trading statistics to make informed decisions and improve their strategies.",
      photo: "projects/bxzella.png",
      github_url: "https://github.com/rubenguc/bxzella",
      link: {
        type: LINKS.WEB_DEMO,
        url: "https://bxzella-demo.vercel.app/",
      },
      technologies: [TECHNOLOGIES.NEXTJS, TECHNOLOGIES.MONGODB],
      color: "#30b6ee",
    },
    {
      title: "Dokkan hidden potentials",
      description: `Database for the hidden potential of characters of dokkan battle.
     The hidden potentials on the web may not be the best for any character; these are based on <a class="embedded-link" href="https://www.youtube.com/playlist?list=PL96oiZRZyU_Mm3z4WiVp7wfp1H4IFYV9Y" target="_blank">Playmaker's guides</a>`,
      photo: "projects/dokkanhp.png",
      github_url: "https://github.com/rubenguc/dokkan-hidden-potentials",
      link: {
        type: LINKS.WEB,
        url: "https://dokkan-hidden-potentials.vercel.app/",
      },
      technologies: [TECHNOLOGIES.NEXTJS, TECHNOLOGIES.MONGODB],
      color: "#5fa442",
    },
  ],
};
