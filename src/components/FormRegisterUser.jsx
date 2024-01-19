import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SelectUserRol } from "./SelectUserRol";
import { SelectCareer } from "./SelectCareer";

function FormRegisterUser() {
  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Ingrese nombre" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Control type="text" placeholder="Ingrese apellido" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicCellphone">
              <Form.Control
                type="tel"
                placeholder="Ingrese numero de celular"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Ingrese correo electronico"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Asigne una contraseña"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirmar Contraseña"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-3 text-center">
            <SelectUserRol />
          </Col>
          <Col xs={12} md={6} className="mb-3 text-center">
            <SelectCareer />
          </Col>
        </Row>

        <Col xs={12} className="mt-3 text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Form>
    </>
  );
}

export default FormRegisterUser;
