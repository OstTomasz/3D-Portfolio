import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MeshPhongMaterial, MeshStandardMaterial } from "three";
import {
  FastForward,
  Search,
  Brain,
  Zap,
  Layers,
  Palette,
  CodeXml,
  BrainCircuit,
} from "lucide-react";

import type {
  NavLink,
  Word,
  CounterItem,
  Ability,
  Project,
  ExpCard,
  TechStackIcon,
  Social,
  // LogoIcon,
  // TechStackImg,
  // Testimonial,
} from "@/types";

export const navLinks: NavLink[] = [
  { name: "Work", link: "#work", id: "nav1" },
  { name: "Experience", link: "#experience", id: "nav2" },
  { name: "Skills", link: "#skills", id: "nav3" },
] as const;

export const words: Word[] = [
  { text: "Ideas", icon: Brain, id: "word1" },
  { text: "Concepts", icon: Layers, id: "word2" },
  { text: "Designs", icon: Palette, id: "word3" },
  { text: "Code", icon: CodeXml, id: "word4" },
  { text: "Ideas", icon: Brain, id: "word5" },
  { text: "Concepts", icon: Layers, id: "word6" },
  { text: "Designs", icon: Palette, id: "word7" },
  { text: "Code", icon: CodeXml, id: "word8" },
] as const;

export const counterItems: CounterItem[] = [
  {
    value: 1000,
    suffix: "+",
    label: "Hours of intensive coding",
    id: "counter1",
  },
  {
    value: 3.5,
    suffix: "+",
    label: "Years of learning & building",
    id: "counter2",
  },
  {
    value: 15,
    suffix: "+",
    label: "Projects in GitHub ecosystem",
    id: "counter3",
  },
  {
    value: 5,
    suffix: "",
    label: "Modern tech-stack skills",
    id: "counter4",
  },
] as const;

export const projects: Project[] = [
  {
    id: "project1",
    title: "Seller CRM",
    desc: "A professional Full-stack CRM application designed to streamline client management and sales workflows. The system enables sales teams to efficiently track interactions and manage customer data within a scalable, modern environment.",
    imgPath: "./images/seller.avif",
    liveLink: "https://github.com/OstTomasz/Seller",
    githubLink: "https://github.com/OstTomasz/Seller",
  },
  {
    id: "project2",
    title: "WebStudio Portfolio",
    desc: "Modern SPA built with React 19 and TypeScript. Developed with a focus on Clean Code and performance. Features advanced forms (Zod), Framer Motion animations and responsiveness. An ideal foundation for scalable projects.",
    imgPath: "./images/webstudio.avif",
    liveLink: "https://own-landing-page-tsx-saa-s.vercel.app/",
    githubLink: "https://github.com/OstTomasz/Own-LandingPage-TSX-SaaS",
  },
  {
    id: "project3",
    title: "Cinemania",
    desc: "Cinemania is a responsive web application for casual movie lovers who want to explore the world of cinema with ease. Browse trending films, discover upcoming releases, search for any title, watch trailers, and build your personal watchlist.",
    imgPath: "./images/cinemania.avif",
    liveLink: "https://magdalenasiniawska.github.io/cinemania_gr2/index.html",
    githubLink: "https://github.com/OstTomasz/GoIT-Cinemania-JS-Group",
  },
];

// export const logoIconsList: LogoIcon[] = [
//   { imgPath: "./images/logos/company-logo-1.png", id: "logo1" },
//   { imgPath: "./images/logos/company-logo-2.png", id: "logo2" },
//   { imgPath: "./images/logos/company-logo-3.png", id: "logo3" },
//   { imgPath: "./images/logos/company-logo-4.png", id: "logo4" },
//   { imgPath: "./images/logos/company-logo-5.png", id: "logo5" },
//   { imgPath: "./images/logos/company-logo-6.png", id: "logo6" },
//   { imgPath: "./images/logos/company-logo-7.png", id: "logo7" },
//   { imgPath: "./images/logos/company-logo-8.png", id: "logo8" },
//   { imgPath: "./images/logos/company-logo-9.png", id: "logo9" },
//   { imgPath: "./images/logos/company-logo-10.png", id: "logo10" },
//   { imgPath: "./images/logos/company-logo-11.png", id: "logo11" },
// ] as const;

export const abilities: Ability[] = [
  {
    icon: Zap,
    title: "Senior Support & Efficiency",
    desc: "I offload senior developers by handling UI/UX and testing, allowing the core team to focus on complex architectural challenges.",
    id: "ability1",
  },
  {
    icon: BrainCircuit,
    title: "AI-Driven Productivity",
    desc: "Leveraging AI tools for rapid prototyping and automation to deliver high-quality features with a significantly faster turnaround.",
    id: "ability2",
  },
  {
    icon: Search,
    title: "Fresh Perspective QA",
    desc: "Bringing a 'clean slate' approach to identify UX inconsistencies and edge cases that established teams might overlook.",
    id: "ability3",
  },
  {
    icon: FastForward,
    title: "Rapid Adaptability",
    desc: "Demonstrated ability to master new tech stacks (MERN, TS) rapidly, ensuring minimal onboarding time and immediate project value.",
    id: "ability4",
  },
] as const;

export const expCards: ExpCard[] = [
  {
    review: `I had the pleasure of working with Tomasz for a year upon taking over the region. This period allowed me to gain a comprehensive understanding of both his technical expertise and organizational skills. 
      Tomasz is a Technical Sales Advisor with exceptionally high technical competencies. He possesses the ability to accurately diagnose problems and explain their causes and potential solutions in a clear, substantive manner. His knowledge and analytical mindset make him a genuine asset to both clients and the team alike.
      His field work planning skills also deserve special recognition. Tomasz's travel routes were always meticulously thought out, logically structured, and consistently executed, resulting in high operational efficiency and optimal time management.
      Tomasz is a specialist you can rely on—dependable, independent, and possessing a very strong professional background. I recommend him with full confidence as a technical expert and a valuable partner for projects that demand knowledge, precision, and accountability.`,
    imgPath: "./images/tiptopol.svg",
    logoPath: "./images/logotiptopol.avif",
    title: "Technical Sales Advisor",
    date: "February 2023 - December 2025",
    responsibilities: [
      "Identified and acquired new business opportunities within the assigned region to drive growth.",
      "Managed long-term stakeholder relationships, ensuring high retention and client satisfaction.",
      "Coordinated the end-to-end lifecycle of client orders, from requirements gathering to final delivery.",
      "Conducted technical onboarding and professional training sessions for clients and internal teams.",
      "Strategically planned and optimized field operations to maximize regional efficiency.",
      "Provided expert technical consulting and diagnosed client needs to deliver scalable, tailored solutions.",
    ],
    id: "experience1",
  },
  {
    review:
      "Tomasz integrated seamlessly into the technical team and was quick to acquire necessary skills. He approached his assigned tasks with great commitment and demonstrates the ability to work effectively both as a team player and independently when required. He is a diligent, dedicated, and responsible professional who remains flexible regarding working hours when necessary. Tomasz is a reliable employee who has consistently met my expectations.",
    imgPath: "./images/forte.png",
    logoPath: "./images/logoforte.png",
    title: "Maintenance Mechanic",
    date: "May 2019 - October 2022",
    responsibilities: [
      "Ensured maximum uptime of production machinery through proactive maintenance and rapid troubleshooting of technical failures.",
      "Diagnosed root causes of equipment malfunctions and implemented effective corrective actions.",
      "Optimized machinery performance and handled system stability through regular inspections.",
      "Managed spare parts inventory and resource allocation to ensure continuous operation.",
      "Maintained precise technical documentation and logged system data within the KPMS environment.",
    ],
    id: "experience2",
  },
] as const;

// export const techStackImgs: TechStackImg[] = [
//   {
//     name: "React",
//     imgPath: "./images/logos/react.png",
//     id: "techImg1",
//   },
//   {
//     name: "TypeScript",
//     imgPath: "./images/logos/python.svg",
//     id: "techImg2",
//   },
//   {
//     name: "NodeJS",
//     imgPath: "./images/logos/node.png",
//     id: "techImg3",
//   },
//   {
//     name: "Interactive",
//     imgPath: "./images/logos/three.png",
//     id: "techImg4",
//   },
//   {
//     name: "Project Manager",
//     imgPath: "./images/logos/git.svg",
//     id: "techImg5",
//   },
// ] as const;

export const techStackIcons: TechStackIcon[] = [
  {
    name: "MongoDB",
    modelPath: "./models/mongodb-logo.glb",
    scale: 45,
    rotation: [0, -Math.PI / 4, 0],
    id: "techIcon5",
  },
  {
    name: "Express",
    modelPath: "./models/js-logo.glb",
    scale: 40,
    rotation: [0, 0, 0],
    id: "techIcon4",
  },
  {
    name: "React",
    modelPath: "./models/react-logo.glb",
    scale: 1,
    rotation: [0, 0, 0],
    id: "techIcon1",
  },
  {
    name: "NodeJS",
    modelPath: "./models/node-logo.glb",
    scale: 4.72,
    rotation: [0, -Math.PI / 2, 0],
    id: "techIcon3",
  },
  {
    name: "TypeScript",
    modelPath: "./models/ts-logo.glb",
    scale: 40,
    rotation: [0, 0, 0],
    id: "techIcon2",
  },
] as const;

// export const testimonials: Testimonial[] = [
//   {
//     name: "Esther Howard",
//     mentions: "@estherhoward",
//     review:
//       "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
//     imgPath: "./images/client1.png",
//     id: "testimonial1",
//   },
//   {
//     name: "Wade Warren",
//     mentions: "@wadewarren",
//     review:
//       "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
//     imgPath: "./images/client3.png",
//     id: "testimonial2",
//   },
//   {
//     name: "Guy Hawkins",
//     mentions: "@guyhawkins",
//     review:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     imgPath: "./images/client2.png",
//     id: "testimonial3",
//   },
//   {
//     name: "Marvin McKinney",
//     mentions: "@marvinmckinney",
//     review:
//       "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
//     imgPath: "./images/client5.png",
//     id: "testimonial4",
//   },
//   {
//     name: "Floyd Miles",
//     mentions: "@floydmiles",
//     review:
//       "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
//     imgPath: "./images/client4.png",
//     id: "testimonial5",
//   },
//   {
//     name: "Albert Flores",
//     mentions: "@albertflores",
//     review:
//       "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
//     imgPath: "./images/client6.png",
//     id: "testimonial6",
//   },
// ] as const;

export const socials: Social[] = [
  {
    name: "github",
    icon: FaGithub,
    site: "https://github.com/OstTomasz",
    id: "socialImg1",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    site: "https://www.linkedin.com/in/tomasz-ostaszewski-7166071aa/",
    id: "socialImg2",
  },
] as const;

export const ROOM_MATERIALS = {
  curtain: new MeshPhongMaterial({ color: "#00c9bc" }),
  body: new MeshPhongMaterial({ color: "#a7a8a7" }),
  table: new MeshPhongMaterial({ color: "#912c2c" }),
  radiator: new MeshPhongMaterial({ color: "#fff" }),
  comp: new MeshStandardMaterial({ color: "#444" }),
  pillow: new MeshPhongMaterial({ color: "#333" }),
  chair: new MeshPhongMaterial({ color: "#000" }),
} as const;

export const GITHUB_URL = "https://www.github.com/OstTomasz";
