import { navLinks } from "@/constants/constants";
import { useScrolled } from "@/hooks/useScrolled";

export const NavBar = () => {
  const isScrolled = useScrolled(10);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Tomasz Ostaszewski
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link, id }) => (
              <li key={id} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contact-btn group relative block w-fit">
          <div className="glow-hover flex items-center justify-center rounded-full border px-3 md:px-8 py-3">
            <span className="text-gradient-hover font-bold text-center text-md md:text-lg">
              Contact me
            </span>
          </div>
        </a>
      </div>
    </header>
  );
};
