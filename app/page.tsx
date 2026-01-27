import Header from "./components/Header";
import Hero from "./components/Hero";
import WebProjects from "./components/WebProjects";
import About from "./components/About";
import Skills from "./components/Skills";
import GraphicDesign from "./components/GraphicDesign";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WebProjects />
        <About />
        <Skills />
        <GraphicDesign />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
