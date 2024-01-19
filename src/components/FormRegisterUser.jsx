import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormRegisterUser() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su nombre" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su apellido" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicCellphone">
                  <Form.Label>Celular</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Ingrese su numero de celular"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su correo electronico"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>Confirme su contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col xs={12} md={6} className="mb-3 text-center">
                <Form.Select aria-label="Default select example">
                  <option>-- Selecciona un Rol --</option>
                  <option value="1">Administrador</option>
                  <option value="2">Aprobador</option>
                  <option value="3">Director</option>
                  <option value="4">Docente</option>
                  <option value="5">Estudiante</option>
                </Form.Select>{" "}
              </Col>

              <Col xs={12} className="mt-3 text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormRegisterUser;

