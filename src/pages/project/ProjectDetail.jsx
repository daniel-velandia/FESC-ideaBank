import { Container } from "react-bootstrap";
import { ProjectInformation } from "../../components/ProjectInformation";

export const ProjectDetail = () => {
  return (
    <div className="cards-container">
      <Container className="mt-5">
        <h1>Valida el proyecto</h1>

        <ProjectInformation />
      </Container>
    </div>
  );
};
