import { Toaster } from "react-hot-toast";

import { NavBar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Showcase } from "@/sections/Showcase";
import { Features } from "@/sections/Features";
import { Experience } from "@/sections/Experience";
import { TechStack } from "@/sections/TechStack";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { IconGradient } from "./components/IconGradient";

export const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <NavBar />
      <main>
        <IconGradient />
        <Hero />
        <Showcase />
        {/* <Logos /> <== scrollbar with companies that I worked with - add after any work experience*/}
        <Features />
        <Experience />
        <TechStack />
        {/* <Testimonials /> <== section with clients review - add after some clients work */}
        <Contact />
      </main>
      <Footer />
    </>
  );
};
