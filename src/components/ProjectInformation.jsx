import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import SelectTypeTags from "./SelectTypeTags";
import { ListTeamMembers } from "./ListTeamMembers";

export const ProjectInformation = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    title: "",
  });
  const [formData, setformData] = useState({
    title: "",
  });

  const selectedTypes = [
    { name: "INGENIERIA DE SOFWARE" },
    { name: "DISEÃ‘O GRAFICO" },
    { name: "ADMINISTRACION FINANCIERA" },
    { name: "DISEÃ‘O DE MODAS" },
    { name: "HOTELERIA Y TURISMO" },
    { name: "LOGISTICA EMPRESARIAL" },
  ];

  const students = [
    { id: 1, name: "Estudiante 1" },
    { id: 2, name: "Estudiante 2" },
    { id: 3, name: "Estudiante 3" },
    { id: 4, name: "Estudiante 4" },
    { id: 5, name: "Estudiante 5" },
    { id: 6, name: "Estudiante 6" },
    { id: 7, name: "Estudiante 7" },
    { id: 8, name: "Estudiante 8" },
    { id: 9, name: "Estudiante 9" },
    { id: 10, name: "Estudiante 10" },
    { id: 11, name: "Estudiante 11" },
    { id: 12, name: "Estudiante 12" },
    { id: 13, name: "Estudiante 13" },
    { id: 14, name: "Estudiante 14" },
    { id: 15, name: "Estudiante 15" },
    { id: 16, name: "Estudiante 16" },
    { id: 17, name: "Estudiante 17" },
    { id: 18, name: "Estudiante 18" },
    { id: 19, name: "Estudiante 19" },
    { id: 20, name: "Estudiante 20" },
  ];

  const handleStudentSelect = (selectedStudents) => {
    console.log("Estudiantes seleccionados:", selectedStudents);
    // Puedes realizar acciones adicionales con los estudiantes seleccionados
  };

  let name = "finalized";

  let buttonComponent;
  if (name === "validated") {
    buttonComponent = (
      <Button
        type="submit"
        variant="warning"
        style={{color: "#ffff", backgroundColor: "#f9db4a", width: "fit-content" }}
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
          style={{color:"black", backgroundColor: "#ffff", width: "fit-content", marginRight: "10px" }}
        >
          Terminar proyecto
        </Button>
        <Button
          type="submit"
          variant="success"
          style={{backgroundColor: "#4baf4f", width: "fit-content" }}
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
        style={{backgroundColor: "#03a9f4", width: "fit-content" }}
      >
        Ver tareas
      </Button>
    );
  } else {
    buttonComponent = (
      <Button
        type="submit"
        variant="danger"
        style={{ backgroundColor: "#9c0f06", width: "fit-content" }}
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
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
                ipsam exercitationem. Officia dicta, tenetur unde necessitatibus
                possimus earum voluptate beatae saepe, labore delectus
                consectetur cupiditate voluptatum ea excepturi facere
                praesentium!
              </p>
              <h3 className="mt-4">Descripcion</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae, distinctio quod! Quaerat expedita similique
                deserunt, ducimus corporis optio, nisi inventore commodi culpa
                animi itaque esse magni aut iusto qui. Aperiam.
              </p>
              <h3 className="mt-4">Usuario</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                temporibus ducimus accusantium doloremque voluptatem, asperiores
                ut! Ad sunt tempora, dolor cupiditate veritatis quia, vitae
                impedit doloremque odit, asperiores quos ab?
              </p>
              <p className="mt-4">fecha</p>
            </Col>
            <Col sm="12" md="4">
              <h3>Nombre del proyecto</h3>
              <Form.Group className="mt-4" controlId="title">
                <Form.Control
                  size="lg"
                  type="text"
                  name="title"
                  placeholder="Ingrese el nombre del proyecto"
                  value={formData.title}
                  isInvalid={formSubmitted && formErrors.title !== ""}
                  style={{ width: "90%" }}
                />

                <Form.Control.Feedback type="invalid">
                  {formSubmitted && formErrors.title}
                </Form.Control.Feedback>
              </Form.Group>
              <h3 className="mt-4">Tags</h3>
              {selectedTypes.map((type, index) => (
                <SelectTypeTags
                  key={index}
                  name={type.name}
                  color={type.color}
                />
              ))}
            </Col>

            <Col sm="12" md="4" className="d-flex flex-column justify-content-between">
              <h3>Integrantes del equipo</h3>
              <ListTeamMembers
                students={students}
                onStudentSelect={handleStudentSelect}
              />
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
