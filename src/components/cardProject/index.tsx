import "./cardProject.css";

import { FaGithub } from "react-icons/fa6";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  repository: string;
};

type CardProjectProps = {
  project: Project;
};

function CardProject({ project }: CardProjectProps) {
  return (
    <div className="card-project">
      <div>
        <h5>{project.name}</h5>
        <br />
        <p>{project.description}</p>
        <br />
        <p>O que utilizei no projeto?</p>
        <br />
        <div>
          {project.technologies &&
            project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
        </div>
      </div>
      <a
        className="github-card-button"
        href={project.repository}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Github</p>
        <FaGithub size={20} />
      </a>
    </div>
  );
}

export default CardProject;
