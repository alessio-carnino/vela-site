import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { getProjects } from "@/sanity/queries";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="site-wrapper">
      <div className="site-inner">
        <Nav />
        <Hero />
        <About />
        <Services />
        <Projects projects={projects} />
        <Contact />
      </div>
    </div>
  );
}
