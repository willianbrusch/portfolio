import "./App.css";
import { Element } from "react-scroll";
import Particles from "./blocks/Backgrounds/Particles/Particles";

import Header from "./components/header";
import About from "./components/about";
import Experience from "./components/experience";
import Footer from "./components/footer";
import InitialBanner from "./components/initialBanner";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <div className="particles">
        <Particles
          particleColors={["#7ca90b", "#7ca90b"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={500}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <Header />

      <main className="wrapper">
        <InitialBanner />
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
      </main>
      <Footer />
    </>
  );
}

export default App;
