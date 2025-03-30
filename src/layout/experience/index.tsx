import "./experience.css";

import CardExperience from "../../components/cardExperience";
import SectionContainer from "../../components/sectionContainer";
import ButtonPrimary from "../../components/buttonPrimary";

import { FaCloudDownloadAlt } from "react-icons/fa";

const companys = [
  {
    companyName: "Recuperi",
    companyImage: "recuperi.png",
    position: "Desenvolvedor Backend",
    employmentPeriod: "Fevereiro 2023 - Dezembro 2024",
    description: [
      "Trabalhei em um projeto chamado Recuperi, no qual atuei na manutenção e evolução de uma aplicação Flask integrada ao banco de dados MySQL. Fui responsável por implementar diversas funcionalidades do sistema e banco de dados por meio de store prodecures. Além disso, trabalhei para aumentar significativamente os testes automatizados da aplicação com Pytest, obtendo mais segurança e confiabilidade no projeto. Também atualizei todo o projeto e suas dependências para versões mais recentes, melhorando o nível de segurança.",
      "Atuei no desenvolvimento e manutenção de microsserviços com Lambdas AWS utilizando Python e Node.js, que processavam dados de forma assíncrona. Utilizei SNS para envio de notificações por e-mail e SQS para distribuir e escalonar o processamento das tarefas, garantindo alta escalabilidade e eficiência. Também planejei a arquitetura de soluções baseada em microsserviços.",
      "Em outro projeto, trabalhei na implementação de um sistema baseado em Django, DRF, PostgreSQL e RESTful, estruturando a automação de testes com Pytest para garantir a confiabilidade da API. Também fiz a implementação de documentação do projeto com Swagger, além de diversas integrações diretas ou por meio de microsserviços.",
      "Também prestei suporte a um projeto frontend em React.",
    ],
  },
  {
    companyName: "Fumi.co",
    companyImage: "fumico.png",
    position: "Desenvolvedor Fullstack",
    employmentPeriod: "Agosto 2022 - Fevereiro 2023",
    description: [
      "Atuei no backend com Node.js, Nestjs, Typeorm e PostgreSQL para o desenvolvimento de novas funcionalidades e na correção de bugs em projetos existentes, garantindo a evolução contínua do sistema. Também implementei diversos testes automatizados para garantir maior confiabilidade e segurança do sistema.",
      "No frontend, trabalhei com TypeScript, React e Next.js, utilizando Styled-components, Redux, Context API, React Hook Form e React Router DOM, além de outras bibliotecas para construir novas funcionalidades e corrigir bugs.",
    ],
  },
  {
    companyName: "Kenzie Academy",
    companyImage: "kenzie.png",
    position: "Supervisor React",
    employmentPeriod: "Outubro 2021 - Maio 2022",
    description: [
      "Atuei na supervisão e suporte ao time de facilitadores de ensino, garantindo a qualidade do aprendizado e auxiliando no desenvolvimento técnico e comportamental dos alunos. Além disso, desempenhei todas as funções de um facilitador de ensino, contribuindo ativamente para a formação dos desenvolvedores.",
    ],
  },
  {
    companyName: "Kenzie Academy",
    companyImage: "kenzie.png",
    position: "Facilitador React",
    employmentPeriod: "Dezembro 2020 - Outubro 2021",
    description: [
      "Ministrei aulas de React e acompanhei o desenvolvimento dos alunos por meio de reuniões 1:1 recorrentes, identificando dificuldades e removendo impedimentos em seu aprendizado, além de ensinar os conceitos técnicos de React, Javascript, HTML, CSS e Git, assim como outros problemas técnicos. Também atuei na orientação sobre Soft Skills e desenvolvimento profissional, oferecendo feedbacks constantes sobre a evolução técnica e comportamental dos alunos.",
      "Também fui responsável por criar conteúdos didáticos para React, como aulas, exercícios e atividades, garantindo um aprendizado mais estruturado. Coordenei a equipe de monitores, composta por alunos que já haviam concluído parcialmente o curso e auxiliavam seus colegas.",
      "Supervisionei projetos em grupo, nos quais os alunos desenvolviam um MVP desde a concepção da ideia até a entrega final. Orientei em todas as etapas, incluindo a definição da proposta, criação do esboço no Figma, planejamento de sprints e execução do projeto, utilizando metodologias ágeis como Scrum e Kanban. Durante o processo, ofereci suporte técnico, auxiliei na resolução de conflitos e garanti que, ao final do prazo, a equipe entregasse um MVP funcional.",
    ],
  },
  {
    companyName: "Kenzie Academy",
    companyImage: "kenzie.png",
    position: "Monitor",
    employmentPeriod: "Outubro 2020 - Dezembro 2020",
    description: [
      "Tirei dúvidas técnicas de React, Javascript, CSS, HTML, Git de alunos menos avançados no curso e fui responsável pela correção de exercícios e atividades, garantindo o aprendizado contínuo e a evolução dos alunos.",
    ],
  },
];

function Experience() {
  return (
    <>
      <SectionContainer name="experience">
        <h3>Experiência</h3>
        {companys &&
          companys.map((company, index) => (
            <CardExperience key={index} company={company} />
          ))}
        <div className="experience-button-container">
          <ButtonPrimary
            link="/assets/willian_brusch_cv.docx"
            download="willian_brusch_cv.docx"
          >
            Baixar Currículo
            <FaCloudDownloadAlt size={18} />
          </ButtonPrimary>
        </div>
      </SectionContainer>
    </>
  );
}

export default Experience;
