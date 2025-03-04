import type { WorkExperience } from "../interfaces";

export const about = {
  description:
    "Specialized in JavaScript and TypeScript for building scalable web applications. Proficient in modern frameworks like React, Next.js, Node.js, and NestJS. Skilled in creating dynamic interfaces, REST/GraphQL APIs, and blockchain solutions. Award-winning developer in Web3 hackathons, with a focus on innovation and clean code practices. Collaborative team player committed to technical excellence.",
};

export const experience: { work: WorkExperience[] } = {
  work: [
    {
      company: "KuroDev",
      role: "CO-Founder / FullStack Developer",
      hits: [
        "Developed a web/mobile platform (React, React Native, Node.js, TypeScript) for real-time patient queue tracking, exam scheduling, and digital access to results, reducing manual tasks and wait times through automated SMS alerts and a self-service patient app.",
        "Built a QR-based student ID system (React, Node.js, MongoDB) to track meal purchases, paired with a parent portal for payment screenshot uploads.",
      ],
    },
    {
      company: "Blockcoders",
      role: "Software enginner",
      hits: [
        "Developed a Web3 wallet compatible with EVM and Polkadot chains, enabling cross-chain XCM transfers and interoperability.",
        "Built a library for XCM message management between Polkadot chains, approved by Web3 Foundation (3 milestones, $10k+ each).",
        "Created a smart contract tracking tool for Polkadot, enhancing on-chain transparency, securing two development milestones valued at over $2k each.",
        "Awards: Won 2 Web3 hackathons (prizes over $5k).",
      ],
    },
    {
      company: "Gracosoft",
      role: "Teacher",
      hits: [
        "Taught classes and workshops on basic web development, using HTML, CSS, and JavaScript.",
      ],
    },
    {
      company: "Creativos Plus",
      role: "Software Developer",
      hits: [
        "Developed a CRM system initially built on Django, later migrated to React and Node.js with a complementary mobile app in React Native, integrating Stripe for card payments and Google Pay processing, and connecting Power BI to the system core to deliver interactive analytics dashboards accessible to both administrators and end-users.",
        "Developed a system for gyms that enabled the management of membership payments, entries, trainers, and clients.",
      ],
    },
    {
      company: "SOFTICO CA",
      role: "Backend Developer",
      hits: [
        "Participated in the migration of the backend for a maritime port management system, migrating it to Node.js and PostgreSQL using stored procedures.",
      ],
    },
    {
      company: "Man Solutions",
      role: "FullStack Developer",
      hits: [
        "Developed an administrative system that enabled easy management of purchases, products, sales, and customers for small businesses.",
      ],
    },
  ],
};
