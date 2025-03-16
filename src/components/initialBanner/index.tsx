import "./initialBanner.css";

import photo_perfil from "./../../assets/photo_perfil.jpeg";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

function InitialBanner() {
  return (
    <section className="initial-banner">
      <img src={photo_perfil}></img>
      <h1>Olá, sou Willian Brusch!</h1>
      <h2>
        Meu foco é construir sistemas performáticos e bem estruturados,
        aplicando as melhores práticas de desenvolvimento.
      </h2>
      <div className="button-container">
        <a
          className="banner-button-github"
          href="https://github.com/willianbrusch"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github <FaGithub />
        </a>
        <a
          className="banner-button-linkedin"
          href="https://www.linkedin.com/in/willianbrusch-desenvolvedor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default InitialBanner;
