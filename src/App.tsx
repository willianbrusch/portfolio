import "./App.css";
import Particles from "./blocks/Backgrounds/Particles/Particles";
import SplitText from "./blocks/TextAnimations/SplitText/SplitText";

import Header from "./components/header";
import { useTheme } from "./context";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <Header />
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Particles
          particleColors={["#228B22", "#228B22"]}
          particleCount={200}
          particleSpread={7}
          speed={0.5}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>
      <main className="wrapper">
        <img
          src="https://avatars.githubusercontent.com/u/53385347?s=400&u=1a635db48a13994201a4ea553bb8439b41d09f4e&v=4"
          style={{
            borderRadius: "50px",
            width: "60px",
            margin: "10px 20px",
            textAlign: "center",
          }}
        ></img>
        <h1>Olá, sou Willian Brusch!</h1>
        <h2>
          Sou um desenvolvedor de software com foco mais de quatro anos de
          experiência!
        </h2>
        <div>
          <button>github</button>
          <button>linkedin</button>
        </div>
        <article>
          <h3>Sobre</h3>
          <p>
            Trabalho com desenvolvimento de software desde 2020. Nesse período
            já trabalhei com diversas tecnologias, tanto no frontend como no
            backend.
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
            <img
              style={{ width: "60px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg"
            />
            <img
              style={{ width: "60px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg"
            />
            <img
              style={{ width: "70px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-plain.svg"
            />
            <img
              style={{ width: "80px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original-wordmark.svg"
            />
            <img
              style={{ width: "60px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
            />
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
            <img
              style={{ width: "60px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
            />
            <img
              style={{ width: "60px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            />
            <img
              style={{ width: "60px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg"
            />
            <img
              style={{ width: "60px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            />
          </div>
        </article>
      </main>
      <footer>
        <p>{theme}</p>
      </footer>
    </>
  );
}

export default App;
