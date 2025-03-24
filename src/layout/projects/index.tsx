import "./projects.css";

import SectionContainer from "../../components/sectionContainer";

import { FaGithub } from "react-icons/fa6";

function Projects() {
  return (
    <>
      <SectionContainer name="projects">
        <h3>Projetos</h3>
        <div className="projects-container">
          <div className="card-project">
            <div>
              <h5>Portifólio</h5>
              <br />
              <p>
                Projeto desenvolvido para apresentar meu portfólio pessoal e
                destacar minhas habilidades e experiências.
              </p>
              <br />
              <p>O que utilizei no projeto?</p>
              <br />
              <div>
                <span>React</span>
                <span>Css</span>
                <span>Framer-motion</span>
              </div>
            </div>
            <a
              className="github-card-button"
              href="https://github.com/willianbrusch/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Github</p>
              <FaGithub size={20} />
            </a>
          </div>
          <div className="card-project">
            <div>
              <h5>Portifólio</h5>
              <br />
              <p>
                Projeto desenvolvido para apresentar meu portfólio pessoal e
                destacar minhas habilidades e experiências.
              </p>
              <br />
              <p>O que utilizei no projeto?</p>
              <br />
              <div>
                <span>React</span>
                <span>Css</span>
                <span>Framer-motion</span>
              </div>
            </div>
            <a
              className="github-card-button"
              href="https://github.com/willianbrusch/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Github</p>
              <FaGithub size={20} />
            </a>
          </div>
          <div className="card-project">
            <div>
              <h5>Portifólio</h5>
              <br />
              <p>
                Projeto desenvolvido para apresentar meu portfólio pessoal e
                destacar minhas habilidades e experiências.
              </p>
              <br />
              <p>O que utilizei no projeto?</p>
              <br />
              <div>
                <span>React</span>
                <span>Css</span>
                <span>Framer-motion</span>
              </div>
            </div>
            <a
              className="github-card-button"
              href="https://github.com/willianbrusch/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Github</p>
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export default Projects;
