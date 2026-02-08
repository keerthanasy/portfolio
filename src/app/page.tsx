import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Scene from "@/components/Scene";


export default function Home() {
  return (
    <main className="relative min-h-screen text-[var(--text-main)] overflow-x-hidden">
      <Scene />

      <Navbar />

      <div className="relative z-10 space-y-32 pb-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
