import "./initialBanner.css";

import photo_perfil from "./../../assets/photo_perfil.jpeg";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ButtonPrimary from "../../components/buttonPrimary";

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
        <ButtonPrimary link="https://www.linkedin.com/in/willianbrusch-desenvolvedor/">
          Linkedin <FaLinkedin />
        </ButtonPrimary>
        <ButtonPrimary
          link="https://github.com/willianbrusch"
          variant="no-color"
        >
          Github <FaGithub />
        </ButtonPrimary>
      </div>
    </section>
  );
}

export default InitialBanner;
