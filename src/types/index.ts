// src/types/index.ts
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export type NavLink = {
  name: string;
  link: `#${string}`;
  id: `nav${number}`;
};

export type Word = {
  text: string;
  icon: LucideIcon;
  id: `word${number}`;
};

export type CounterSuffix = "" | "+" | "%";

export type CounterItem = {
  value: number;
  suffix: CounterSuffix;
  label: string;
  id: `counter${number}`;
};

export type Project = {
  id: `project${number}`;
  title: string;
  desc: string;
  imgPath: `./images/${string}`;
  liveLink: string;
  githubLink: string;
};

export type LogoIcon = {
  imgPath: `./images/logos/${string}`;
  id: `logo${number}`;
};

export type Ability = {
  icon: LucideIcon;
  title: string;
  desc: string;
  id: `ability${number}`;
};

export type ExpCard = {
  review: string;
  imgPath: `./images/${string}`;
  logoPath: `./images/${string}`;
  title: string;
  date: string;
  responsibilities: string[];
  id: `experience${string}`;
};

export type ExpLogo = {
  name: string;
  imgPath: `./images/${string}`;
  id: `expLogo${number}`;
};

export type TechStackImg = {
  name: string;
  imgPath: `./images/${string}`;
  id: `techImg${number}`;
};

export type TechStackIcon = {
  name: string;
  modelPath: `./models/${string}`;
  scale: number;
  rotation: [number, number, number];
  id: `techIcon${number}`;
};

export type Testimonial = {
  name: string;
  mentions: `@${string}`;
  review: string;
  imgPath: `./images/${string}`;
  id: `testimonial${number}`;
};

export type Social = {
  name: string;
  icon: IconType;
  site: string;
  id: `socialImg${number}`;
};
