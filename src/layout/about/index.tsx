import "./about.css";

import SectionContainer from "../../components/sectionContainer";
import { useTheme } from "../../context";

function About() {
  const { theme } = useTheme();

  return (
    <>
      <SectionContainer name="about">
        <h3>Sobre</h3>
        <p>
          Com mais de quatro anos de experiência no desenvolvimento de software,
          atuo principalmente como desenvolvedor backend, utilizando tecnologias
          como Python (Flask, Django), Node.js (NestJS), PostgreSQL, MySQL e
          AWS. Tenho forte experiência na construção e manutenção de
          microsserviços, desenvolvimento de APIs RESTful e automação de testes
          com Pytest.{" "}
        </p>
        <br />
        <p>
          Além do backend, possuo habilidades em frontend, trabalhando com
          React, Next.js, TypeScript e diversas bibliotecas para construção de
          interfaces modernas e escaláveis. Também tenho experiência acadêmica e
          pedagógica, tendo atuado como facilitador e supervisor de ensino em
          React, onde ministrei aulas, criei conteúdos didáticos e orientei
          alunos no desenvolvimento de projetos completos.{" "}
        </p>
        <br />
        <p>
          Atualmente, curso Tecnologia em Análise e Desenvolvimento de Sistemas
          e continuo aprimorando minhas habilidades com especializações e
          certificações na área de tecnologia.
        </p>
        <br />
        <h4>Educação</h4>
        <br />
        <div className="education-card">
          <h5>Tecnologia em Análise e Desenvolvimento de Sistemas</h5>
          <p>Centro Universitário UniOpet</p>
          <span>Fevereiro 2025 - o momento</span>
        </div>
        <br />
        <div className="education-card">
          <h5>Curso Fullstack</h5>
          <p>Kenzie Academy</p>
          <span>Abril 2020 - Abril 2021</span>
        </div>
        <br />
        <h4>Tecnologias com que trabalho</h4>
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
      </SectionContainer>
    </>
  );
}

export default About;
