import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Title from "./components/Title/Title";
import Skills from "./components/Skills/Skills";
import IconsTop from "./components/IconsTop/IconsTop";
import BioSection from "./components/BioSection/BioSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import ContactMeSection from "./components/ContactMeSection/ContactMeSection";


function App() {
  return (
    <div className="App">
      <IconsTop />
      <Title />
      <BioSection />
      <ProjectsSection />
      <AboutMeSection />
      <Skills />
      <ContactMeSection />
    </div>
  );
}

export default App;
