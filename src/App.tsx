import "./App.css";
import Particles from "./blocks/Backgrounds/Particles/Particles";
import photo_perfil from "./assets/photo_perfil.jpeg";

import Header from "./components/header";
import About from "./components/about";
import { Element } from "react-scroll";
import Experience from "./components/experience";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          width: "100%",
          height: "280%",
          position: "absolute",
          zIndex: "-1",
        }}
      >
        <Particles
          particleColors={["#228B22", "#228B22"]}
          particleCount={400}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={500}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <main className="wrapper">
        <img
          src={photo_perfil}
          style={{
            borderRadius: "50px",
            width: "100px",
            margin: "10px 20px",
            textAlign: "center",
          }}
        ></img>
        <h1>Olá, sou Willian Brusch!</h1>
        <h2>
          Meu foco é construir sistemas performáticos e bem estruturados,
          aplicando as melhores práticas de desenvolvimento.
        </h2>
        <div className="button-container">
          <a
            className="banner-button"
            href="https://github.com/willianbrusch"
            target="_blank"
            rel="noopener noreferrer"
          >
            github <FaGithub />
          </a>
          <a
            className="banner-button"
            href="https://www.linkedin.com/in/willianbrusch-desenvolvedor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
            <FaLinkedin />
          </a>
        </div>
        <Element style={{ margin: "0px" }} name="about">
          <About />
        </Element>
        <p
          style={{
            width: "100vw",
            height: "30px",
            backgroundColor: "#228B22",
            borderRadius: "0px 0px 0px 25px",
          }}
        ></p>
        <Element style={{ margin: "0px" }} name="experience">
          <Experience />
        </Element>
        <p
          style={{
            width: "100vw",
            height: "30px",
            backgroundColor: "#228B22",
            borderRadius: "0px 0px 0px 25px",
          }}
        ></p>
      </main>
      <Footer />
    </>
  );
}

export default App;
