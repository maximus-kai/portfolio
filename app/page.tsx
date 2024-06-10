import HeroSection from "./src/components/HeroSection";
import NavBar from "./src/components/NavBar";
import AboutSection from "./src/components/AboutSection";
import ProjectsSection from "./src/components/ProjectsSection";
import Achievments from "./src/components/Achievments";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <NavBar/>
      <div className="container mx-auto px-12 py-4 mt-32">
        <HeroSection />
        <Achievments/>
        <AboutSection />
        <ProjectsSection/>
      </div>
    </main>
  );
}
