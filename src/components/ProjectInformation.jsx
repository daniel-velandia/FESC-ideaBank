import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import SelectTypeTags from "./SelectTypeTags";
import { ListTeamMembers } from "./ListTeamMembers";
import { useProjectData } from "../hooks/useProjectData";
import { useLocation } from "react-router-dom";
import { ModalUserManager } from "./ModalUserManager";
import axios from "axios";
import { PROPOSAL_EDIT_POST_ENDPOINT } from "../connections/helpers/endpoints";

export const ProjectInformation = () => {
  const [showModalManager, setShowModalManager] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formErrors, setFormErrors] = useState({
    projectName: "",
  });
  const [formData, setFormData] = useState({
    projectName: "",
  });

  const sendProjectDataRef = useRef(null);

  const [teamproject, setTeamproject] = useState([]);
  const [newTeamProject, setnewTeamProject] = useState([]);
  const [tags, setTags] = useState([]);

  //Bloque para obtener el id de la ruta
  const project = useProjectData();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idProject = searchParams.get("id");

  //Funcion para obtener los estudiante y profesorese seleccionados
  const handleUserTeamSelect = (selectedTeamUser) => {
    setTeamproject(selectedTeamUser);
    const UsertsWithIsManager = selectedTeamUser.map((user) => ({
      email: user.email,
      isManager: "no",
    }));
    setnewTeamProject(UsertsWithIsManager);
  };

  //Funcion para obtener los tags del componente hijo
  const handleTagsSelect = (res) => {
    setTags(res);
  };

  const handleDocenteManagerSelect = (docenteManager) => {
    const isDocenteManagerInArray = newTeamProject.some(
      (member) => member.email === docenteManager.email
    );
    // Si el docenteManager ya está en el array, actualizar su propiedad isManager a true
    // Si no está en el array, agregarlo con isManager igual a true
    setnewTeamProject((prevTeamProject) => {
      if (isDocenteManagerInArray) {
        return prevTeamProject.map((member) =>
          member.email === docenteManager.email
            ? { ...member, isManager: "yes" }
            : member
        );
      } else {
        return [
          ...prevTeamProject,
          {
            email: docenteManager.email,
            isManager: "yes",
          },
        ];
      }
    });
    sendProjectDataRef.current = true;
  };

  useEffect(() => {
    if (sendProjectDataRef.current) {
      sendProjectDataToBackend();
      sendProjectDataRef.current = false;
    }
  }, [newTeamProject]);
  const sendProjectDataToBackend = async () => {
    const projectDataToSend = {
      projectName: formData.projectName,
      identificator: idProject,
      userToProject: newTeamProject,
      tagsToProject: tags,
    };

    console.log(projectDataToSend);

    axios
      .post(PROPOSAL_EDIT_POST_ENDPOINT, projectDataToSend)
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
      })
      .catch((error) => {
        console.error("Error al enviar datos al servidor:", error);
      });
  };

  //Funcion que cumple el boton de Validar cuando el estado pendiente
  const handleButtonClick = () => {
    const docenteUsers = teamproject.filter((user) => user.rol === "DOCENTE");
    if (docenteUsers.length > 0) {
      setShowModalManager(true);
    } else {
      console.log("No hay usuarios con el rol DOCENTE");
    }
  };

  let name = project.status;


  return (
    <>
      <Card className="w-100">
        <Card.Header className={`my-header-project-${name}`}>
          <div className={`my-badge-state-${name}`}>{name}</div>
        </Card.Header>
        <Card.Body>
          <Form className="px-3 mt-4">
            <Row>
              <Col sm="12" md="4" className="border-info-component">
                <h3>Valor de propuesta</h3>
                <p>{project.valueProposal}</p>
                <h3 className="mt-4">Descripcion</h3>
                <p>{project.description}</p>
                <h3 className="mt-4">Usuario</h3>
                <p>{project.nameUserCreator}</p>
                <p className="mt-4">{project.creationDate}</p>
              </Col>
              <Col sm="12" md="4">
                <h3>Nombre del proyecto</h3>
                <Form.Group className="mt-4" controlId="projectName">
                  <Form.Control
                    size="lg"
                    type="text"
                    name="projectName"
                    placeholder="Ingrese el nombre del proyecto"
                    value={formData.projectName}
                    onChange={(e) =>
                      setFormData({ ...formData, projectName: e.target.value })
                    }
                    isInvalid={formSubmitted && formErrors.projectName !== ""}
                    style={{ width: "90%" }}
                  />

                  <Form.Control.Feedback type="invalid">
                    {formSubmitted && formErrors.projectName}
                  </Form.Control.Feedback>
                </Form.Group>
                <h3 className="mt-4">Tags</h3>
                <SelectTypeTags onTagsSelect={handleTagsSelect} />
              </Col>

              <Col
                sm="12"
                md="4"
                className="d-flex flex-column justify-content-between"
              >
                <h3>Integrantes del equipo</h3>
                <ListTeamMembers onStudentSelect={handleUserTeamSelect} />
                <div className="d-flex justify-content-end mt-auto ">
                  <Button
                    type="button"
                    variant="danger"
                    style={{ backgroundColor: "#9c0f06", width: "fit-content" }}
                    onClick={handleButtonClick}
                  >
                    Validar
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <ModalUserManager
        isOpen={showModalManager}
        closeModal={() => {
          setShowModalManager(false);
        }}
        docenteUsers={teamproject.filter((user) => user.rol === "DOCENTE")}
        onDocenteSelect={handleDocenteManagerSelect}
      />
    </>
  );
};
