import HeroSection from "./components/Hero Section/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import WorkExperience from "./components/Work Experience/WorkExperience";
import { experiences } from "./constants";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkExperience experiences={experiences} />
    </>
  );
}

export default App;
