import { NavBar } from "./components/Navbar";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Showcase } from "./sections/Showcase";
// import { Logos } from "./sections/Logos";

export const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Showcase />
        {/* <Logos /> scrollbar with companies*/}
        <Features />
      </main>
    </>
  );
};
