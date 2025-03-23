import { useRef } from "react";
import "./projects.css";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { FaGithub } from "react-icons/fa6";

// import portfolio from "./../../../public/assets/portfolio.png";

function Projects() {
  const ProjectsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ProjectsRef,
    offset: ["start end", "center 50%"], // Quando o topo do elemento entra e quando sai da tela
  });

  const x = useSpring(
    useTransform(scrollYProgress, [0, 0.6], ["50vw", "0vw"]),
    { stiffness: 50, damping: 20 }
  );

  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.6], [0, 1]), {
    stiffness: 50,
    damping: 20,
  });

  return (
    <>
      <motion.section
        ref={ProjectsRef}
        className="projects"
        id="projects"
        style={{ x, opacity }}
      >
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
      </motion.section>
    </>
  );
}

export default Projects;
