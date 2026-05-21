import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Experience } from "@/components/sections/Experience";
import { Leadership } from "@/components/sections/Leadership";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Leadership />
      <Contact />
    </>
  );
}
