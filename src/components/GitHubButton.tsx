import { FaGithub } from "react-icons/fa";

export const GitHubButton = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="group absolute top-5 right-5 z-10 flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-125 hover:rotate-360"
  >
    <FaGithub
      className="transition-all duration-500 group-hover:scale-110"
      size={20}
    />
  </a>
);
