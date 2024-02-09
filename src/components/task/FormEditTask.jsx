import { useState } from "react";
import { Form, Button, Row, Col, FloatingLabel } from "react-bootstrap"
import { SelectMemberTask } from "./SelectMemberTask";

export const FormEditTask = ({identificator}) => {

  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cargo, setCargo] = useState("");
  const [errores, setErrores] = useState({});

  const validarCampos = () => {
    const errores = {};

    if (!nombre.trim()) {
      errores.nombre = "El nombre de la tarea es obligatorio";
    }

    if (!fecha.trim()) {
      errores.fecha = "La fecha es obligatoria";
    }

    if (!descripcion.trim()) {
      errores.descripcion = "La descripción es obligatoria";
    }

    if (!cargo.trim()) {
      errores.cargo = "Seleccione un cargo";
    }

    setErrores(errores);

    return Object.keys(errores).length === 0;
  };

  const handleSelectChange = (selectedMemberTask) => {
    setCargo(selectedMemberTask);
  };

  const handleTaskUpdate = () => {

  }

  return (
    <Form>
            <Row>
              <Col>
                <Form.Group controlId="nombreTarea" className="mb-4">
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Titulo de la tarea"
                  >
                    <Form.Control
                      type="text"
                      style={{ height: "50px" }}
                    />
                    {errores.nombre && (
                      <Form.Text className="text-danger">
                        {errores.nombre}
                      </Form.Text>
                    )}
                  </FloatingLabel>
                </Form.Group>

                <Form.Group controlId="fechaTarea" className="mb-4">
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Fecha Limite"
                  >
                    <Form.Control
                      type="date"
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                      style={{ height: "50px" }}
                    />
                    {errores.fecha && (
                      <Form.Text className="text-danger">
                        {errores.fecha}
                      </Form.Text>
                    )}
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>

            <SelectMemberTask
              idProject={identificator}
              value={cargo}
              errores={errores.cargo}
              onChange={handleSelectChange}
            />

            <Form.Group controlId="descripcionTarea" className="mb-4">
              <FloatingLabel
                controlId="floatingSelect"
                label="Descripción de la tarea"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  style={{ height: "150px" }}
                />
                {errores.descripcion && (
                  <Form.Text className="text-danger">
                    {errores.descripcion}
                  </Form.Text>
                )}
              </FloatingLabel>
            </Form.Group>

            <div style={{ textAlign: "right", marginBottom: "10px" }}>
              <Button
                type="button"
                variant="danger"
                className="my-modal-button"
                onClick={handleTaskUpdate}
              >
                Editar Tarea
              </Button>
            </div>
          </Form>
  )
}
