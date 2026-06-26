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
    <div style={{ width: "100%", display: "flex", justifyContent: "center", background: "#E9E9E6" }}>
      <div style={{ width: 1440, background: "#FFFFFF", color: "#0A0A0A", fontFamily: "'Hanken Grotesk', sans-serif" }}>
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
