import "./App.css";

import Header from "./layout/header";
import About from "./layout/about";
import Experience from "./layout/experience";
import Footer from "./layout/footer";
import InitialBanner from "./layout/initialBanner";
import Projects from "./layout/projects";

import { useEffect, useState } from "react";
import { Element, Link } from "react-scroll";
import Particles from "./blocks/Backgrounds/Particles/Particles";
import { FaAngleUp } from "react-icons/fa6";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isSafariBrowser =
      /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    setIsSafari(isSafariBrowser);
  }, []);

  return (
    <>
      {!isSafari && (
        <div className="particles">
          <Particles
            particleColors={["#005c53", "#005c53"]}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={200}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
      )}
      <div className="scroll-to-top">
        {isVisible && (
          <Link to="header" className="scroll-to-top-button">
            <FaAngleUp size={25} />
          </Link>
        )}
      </div>
      <Element name="header">
        <Header />
      </Element>

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
