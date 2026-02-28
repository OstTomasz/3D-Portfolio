import { NavBar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Showcase } from "./sections/Showcase";
// import { Logos } from "./sections/Logos";
import { Features } from "./sections/Features";
import { Experience } from "./sections/Experience";
import { TechStack } from "./sections/TechStack";
// import { Testemonials } from "./sections/Testemonials";

export const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Showcase />
        {/* <Logos /> <== scrollbar with companies that I worked witch - add after any work experience*/}
        <Features />
        <Experience />
        <TechStack />
        {/* <Testemonials /> <== section with clients review - add after some clients work */}
      </main>
    </>
  );
};
