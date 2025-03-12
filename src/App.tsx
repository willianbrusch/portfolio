import "./App.css";
import Particles from "./blocks/Backgrounds/Particles/Particles";

import Header from "./components/header";
import About from "./components/about";

function App() {
  return (
    <>
      <Header />
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Particles
          particleColors={["#228B22", "#228B22"]}
          particleCount={200}
          particleSpread={10}
          speed={0.5}
          particleBaseSize={300}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>

      <main className="wrapper">
        <img
          src="https://avatars.githubusercontent.com/u/53385347?s=400&u=b7ab21ccb70c533c61ec6a8ad4d8dc2d676f44e8&v=4"
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
        <div>
          <button>github</button>
          <button>linkedin</button>
        </div>
        <About />
        <p
          style={{
            width: "100vw",
            height: "30px",
            backgroundColor: "green",
            borderRadius: "0px 0px 0px 25px",
          }}
        ></p>
        <article id="experience">
          <h3>Experiêcia</h3>

          <p>
            Trabalho com desenvolvimento de software desde 2020. Nesse período
            já trabalhei com diversas tecnologias, tanto no frontend como no
            backend.
          </p>
        </article>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
