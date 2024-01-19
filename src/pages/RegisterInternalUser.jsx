import React from "react";
import FormRegisterUser from "../components/FormRegisterUser";
import { Container, Row, Col } from "react-bootstrap";

export const RegisterInternalUser = () => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <FormRegisterUser />
        </Col>
      </Row>
    </Container>
  );
};
