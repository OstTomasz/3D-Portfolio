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
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};
