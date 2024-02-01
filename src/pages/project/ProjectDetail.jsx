import { Container } from "react-bootstrap";
import { ProjectPendingStatus } from "../../components/ProjectPendingStatus";
import { useProjectData } from "../../hooks/useProjectData";
import { ProjectInformation } from "../../components/ProjectInformation";

export const ProjectDetail = () => {
  const project = useProjectData();

  const isProjectPending = project.status === "PENDIENTE";
  const isProjectApproved = project.status === "APROBADO";

  return (
    <div className="cards-container">
      <Container className="mt-5">
        <h1>Validar proyecto RECHAZAR/APROBAR</h1>
        {isProjectPending && <ProjectPendingStatus project={project} />}
        {isProjectApproved && <ProjectInformation/>}
      </Container>
    </div>
  );
};
