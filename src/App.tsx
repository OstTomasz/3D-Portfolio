import { NavBar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Showcase } from "./sections/Showcase";
// import { Logos } from "./sections/Logos";
import { Features } from "./sections/Features";
import { Experience } from "./sections/Experience";
import { TechStack } from "./sections/TechStack";
import { Contact } from "./sections/Contact";
// import { Testemonials } from "./sections/Testemonials";

import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <>
      <Toaster position="top-right" />;
      <NavBar />
      <main>
        <Hero />
        <Showcase />
        {/* <Logos /> <== scrollbar with companies that I worked witch - add after any work experience*/}
        <Features />
        <Experience />
        <TechStack />
        {/* <Testemonials /> <== section with clients review - add after some clients work */}
        <Contact />
      </main>
    </>
  );
};
