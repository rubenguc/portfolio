import type { WorkExperience } from "./interfaces";

export const about = {
  description:
    "With 5 years of experience in software development, specializing in building robust and scalable applications using technologies such as React, Node.js, JavaScript, and TypeScript. Solid understanding of databases like MongoDB and PostgreSQL, with proficiency in containerization tools like Docker. A proactive, responsible, and creative professional with a strong focus on teamwork and effective collaboration.",
  hobbies: ["🎮 Videogames", "👻 Horror movies", "🐶 Dogs", "🇯🇵 Anime"],
};

export const experience: { work: WorkExperience[] } = {
  work: [
    {
      company: "KuroDev",
      role: "CO-Founder / FullStack Developer",
      hits: [
        "Developed applications for local businesses that improved their sales and customer management.",
      ],
      technologies: [],
    },
    {
      company: "Blockcoders",
      role: "Software enginner",
      hits: [
        "Developed a Web3 wallet compatible with EVM and Polkadot chains, which included support for XCM transfers, facilitating interoperability between different blockchain networks.",
        "Awarded in two Web3 hackathons, where technical skills and creativity were demonstrated in solving challenges in the blockchain space, with prizes exceeding $5,000.",
        "Created a library that allows for the management of XCM messages between Polkadot chains, simplifying integration and communication between different parachains. This library successfully passed three milestones for the Web3 Foundation, each valued at over $10,000.",
        "Implemented an exploration tool to track and analyze the movements of smart contracts on Polkadot networks, providing visibility and transparency in on-chain operations.",
        "Implemented Sentry for error monitoring and reporting, enhancing system stability and issue resolution efficiency.",
      ],
      technologies: [],
    },
    {
      company: "Gracosoft",
      role: "Teacher",
      hits: [
        "Taught classes and workshops on basic web development, using HTML, CSS, and JavaScript. ",
      ],
      technologies: [],
    },
    {
      company: "Creativos Plus",
      role: "Software Developer",
      hits: [
        "Developed a system for gyms that enabled the management of membership payments, entries, trainers, and clients.",
        "Collaborated in migrating a CRM from Django to React and its app to React Native, improving its usability, aesthetics, and speed.",
        "Integrated Stripe for payment processing, supporting both credit card transactions and Google Pay.",
      ],
      technologies: [],
    },
    {
      company: "SOFTICO CA",
      role: "Backend Developer",
      hits: [
        "Participated in the migration of the backend for a maritime port management system, migrating it to Node.js and PostgreSQL using stored procedures.",
      ],
      technologies: [],
    },
    {
      company: "Man Solutions",
      role: "FullStack Developer",
      hits: [
        "Developed an administrative system that enabled easy management of purchases, products, sales, and customers for small businesses.",
      ],
      technologies: [],
    },
  ],
};

export const projects = [
  {
    name: "What do your cheems",
    folder: "wdyc",
    main: "1.png",
  },
  {
    name: "Battleship",
    folder: "battleship",
    main: "1.png",
  },
];
