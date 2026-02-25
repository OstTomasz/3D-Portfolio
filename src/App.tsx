import { NavBar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Showcase } from "./sections/Showcase";

export const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Showcase />
      </main>
    </>
  );
};
