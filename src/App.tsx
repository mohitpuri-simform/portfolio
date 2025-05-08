import HeroSection from "./components/Hero Section/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ProjectShowcase from "./components/Project Showcase/ProjectShowcase";
import WorkExperience from "./components/Work Experience/WorkExperience";
import { experiences, projects } from "./constants";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkExperience experiences={experiences} />
      <ProjectShowcase projects={projects} />
    </>
  );
}

export default App;
