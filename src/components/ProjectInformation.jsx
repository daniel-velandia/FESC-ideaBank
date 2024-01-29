import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import SelectTypeTags from "./SelectTypeTags";
import { ListTeamMembers } from "./ListTeamMembers";
import { useProjectData } from "../hooks/useProjectData";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const ProjectInformation = () => {
  const project = useProjectData();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const location = useLocation();
  const [formErrors, setFormErrors] = useState({
    projectName: "",
  });
  const [formData, setFormData] = useState({
    projectName: "",
  });
  const [selectedTags, setSelectedTags] = useState([]);

 

  const [teamproject, setTeamproject] = useState([]);
  const handleStudentSelect = (selectedStudents) => {
    setTeamproject(selectedStudents);
  };

  const handleButtonClick = (selectedStudents) => {
    const searchParams = new URLSearchParams(location.search);
    const idProject = searchParams.get("id");

    const projectDataToSend = {
      identificator: idProject,
      projectName: formData.projectName,
      tagsToProject: selectedTags,
      userToProject: teamproject,
    };

    console.log(projectDataToSend);

    // Enviar la información al servidor
    axios
      .post("URL_DEL_ENDPOINT", projectDataToSend)
      .then((response) => {
        // Manejar la respuesta del servidor si es necesario
        console.log("Respuesta del servidor:", response.data);
      })
      .catch((error) => {
        console.error("Error al enviar datos al servidor:", error);
      });
  };

  const handleTagsSelect = (res) => {
    console.log(res)
  };
  let name = project.status;

  let buttonComponent;
  if (name === "validated") {
    buttonComponent = (
      <Button
        type="submit"
        variant="warning"
        style={{
          color: "#ffff",
          backgroundColor: "#f9db4a",
          width: "fit-content",
        }}
      >
        Agregar tarea
      </Button>
    );
  } else if (name === "inprogress") {
    buttonComponent = (
      <>
        <Button
          type="submit"
          variant="secondary"
          style={{
            color: "black",
            backgroundColor: "#ffff",
            width: "fit-content",
            marginRight: "10px",
          }}
        >
          Terminar proyecto
        </Button>
        <Button
          type="submit"
          variant="success"
          style={{ backgroundColor: "#4baf4f", width: "fit-content" }}
        >
          Ver tareas
        </Button>
      </>
    );
  } else if (name === "finalized") {
    buttonComponent = (
      <Button
        type="submit"
        variant="primary"
        style={{ backgroundColor: "#03a9f4", width: "fit-content" }}
      >
        Ver tareas
      </Button>
    );
  } else {
    buttonComponent = (
      <Button
        type="button"
        variant="danger"
        style={{ backgroundColor: "#9c0f06", width: "fit-content" }}
        onClick={handleButtonClick}
      >
        Validar
      </Button>
    );
  }

  return (
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
                <SelectTypeTags
                  onTagsSelect={handleTagsSelect}
                />
              
            </Col>

            <Col
              sm="12"
              md="4"
              className="d-flex flex-column justify-content-between"
            >
              <h3>Integrantes del equipo</h3>
              <ListTeamMembers onStudentSelect={handleStudentSelect} />
              <div className="d-flex justify-content-end mt-auto ">
                {buttonComponent}
              </div>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};
