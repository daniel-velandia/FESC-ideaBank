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
        {isProjectPending && <h1>Validar proyecto pendiente - RECHAZAR/APROBAR</h1>}
        {isProjectApproved && <h1>Validar proyecto aprobado -  EN PROGRESO</h1>}
        {isProjectPending && <ProjectPendingStatus project={project} />}
        {isProjectApproved && <ProjectInformation />}
      </Container>
    </div>
  );
};
