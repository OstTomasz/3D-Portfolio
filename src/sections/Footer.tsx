import { socials } from "@/constants/constants";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          {socials.map(({ icon: Icon, site, id }) => (
            <a key={id} href={site} target="_blank" className="icon">
              <Icon size={26} />
            </a>
          ))}
        </div>
        <p className="text-white-50">
          {new Date().getFullYear()}. Created by Tomasz Ostaszewski with&nbsp;
          <a
            href="https://www.youtube.com/watch?v=E-fdPfRxkzQ&t=88s"
            target="_blank"
            className="font-bold"
          >
            JavaScript Mastery
          </a>
        </p>
      </div>
    </footer>
  );
};
