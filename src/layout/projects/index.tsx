import "./projects.css";

import SectionContainer from "../../components/sectionContainer";

import CardProject from "../../components/cardProject";

const projects = [
  {
    name: "Portifólio",
    description:
      "Projeto desenvolvido para apresentar meu portfólio pessoal e destacar minhas habilidades e experiências.",
    technologies: ["React", "Css", "Framer-motion"],
    repository: "https://github.com/willianbrusch/portfolio",
  },
];

function Projects() {
  return (
    <>
      <SectionContainer name="projects">
        <h3>Projetos</h3>
        <div className="projects-container">
          {projects &&
            projects.map((project, index) => (
              <CardProject key={index} project={project} />
            ))}
        </div>
      </SectionContainer>
    </>
  );
}

export default Projects;
