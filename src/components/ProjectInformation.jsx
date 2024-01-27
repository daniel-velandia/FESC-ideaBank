import { Form, Button, Row, Col } from "react-bootstrap";
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

  return (
    <Form className="px-3 mt-4">
      <Row>
        <Col sm="12" md="6">
          <Form.Group controlId="title">
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
          <h3 className="mt-4">Valor de propuesta</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ipsam
            exercitationem. Officia dicta, tenetur unde necessitatibus possimus
            earum voluptate beatae saepe, labore delectus consectetur cupiditate
            voluptatum ea excepturi facere praesentium!
          </p>
          <h3 className="mt-4">Descripcion</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, distinctio quod! Quaerat expedita similique deserunt,
            ducimus corporis optio, nisi inventore commodi culpa animi itaque
            esse magni aut iusto qui. Aperiam.
          </p>
          <h3 className="mt-4">Usuario</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            temporibus ducimus accusantium doloremque voluptatem, asperiores ut!
            Ad sunt tempora, dolor cupiditate veritatis quia, vitae impedit
            doloremque odit, asperiores quos ab?
          </p>
          <h3 className="mt-4">Tags</h3>
          {selectedTypes.map((type, index) => (
            <SelectTypeTags key={index} name={type.name} color={type.color} />
          ))}
          <p className="mt-4">fecha</p>
        </Col>

        <Col sm="12" md="6">
          <h2>Integrantes del equipo</h2>
          <ListTeamMembers
            students={students}
            onStudentSelect={handleStudentSelect}
          />
        </Col>
      </Row>

      <div className=" mb-3">
        <Button
          type="submit"
          variant="danger"
          className="mt-3"
          style={{ backgroundColor: "#9c0f06", width: "fit-content" }}
        >
          Validar
        </Button>
      </div>
    </Form>
  );
};
