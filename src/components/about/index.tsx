import { useTheme } from "../../context";
import "./about.css";
import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  const { theme } = useTheme();

  const { scrollYProgress } = useScroll(); // Obtém progresso do scroll
  const x = useTransform(scrollYProgress, [0, 0.6], ["50vw", "0vw"]); // 200px para fora → 0 (posição normal)
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]); // Opacidade de 50% a 100%

  return (
    <motion.article id="about" className="about" style={{ x, opacity }}>
      <h3>Sobre</h3>
      <p>
        Trabalho com desenvolvimento de software desde 2020. Nesse período já
        trabalhei com diversas tecnologias, tanto no frontend como no backend.
      </p>
      <br />
      <p>Tecnologias com que trabalho</p>
      <br />
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <img
          style={{ width: "60px" }}
          alt="python"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
        />
        {theme == "light" ? (
          <img
            style={{ width: "60px" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg"
          />
        ) : (
          <i
            style={{ fontSize: "60px" }}
            className="devicon-django-plain-wordmark"
          ></i>
        )}
        {theme == "light" ? (
          <img
            style={{ width: "60px" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg"
          />
        ) : (
          <i
            style={{ fontSize: "60px" }}
            className="devicon-flask-original-wordmark"
          ></i>
        )}
        {theme == "light" ? (
          <img
            style={{ width: "70px" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-plain.svg"
          />
        ) : (
          <i
            style={{ fontSize: "60px" }}
            className="devicon-djangorest-plain"
          ></i>
        )}
        {theme == "light" ? (
          <img
            style={{ width: "80px" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original-wordmark.svg"
          />
        ) : (
          <i
            style={{ fontSize: "60px" }}
            className="devicon-sqlalchemy-plain-wordmark"
          ></i>
        )}
        <img
          style={{ width: "60px" }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        />
        <img
          style={{ width: "60px" }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        />
        <img
          style={{ width: "60px" }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
        />
        <img
          style={{ width: "60px" }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
        />
        {theme == "light" ? (
          <img
            style={{ width: "60px" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
          />
        ) : (
          <i
            style={{ fontSize: "60px" }}
            className="devicon-nextjs-line-wordmark"
          ></i>
        )}
        {theme == "light" ? (
          <img
            style={{ width: "60px" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
          />
        ) : (
          <i
            style={{ fontSize: "60px" }}
            className="devicon-nodejs-line-wordmark"
          ></i>
        )}
        <img
          style={{ width: "60px" }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg"
        />
        {theme == "light" ? (
          <img
            style={{ width: "60px" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          />
        ) : (
          <img
            style={{ width: "60px" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
          />
        )}
        {theme == "light" ? (
          <img
            style={{ width: "60px" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
          />
        ) : (
          <i
            style={{ fontSize: "60px" }}
            className="devicon-postgresql-plain-wordmark"
          ></i>
        )}
      </div>
    </motion.article>
  );
}

export default About;
