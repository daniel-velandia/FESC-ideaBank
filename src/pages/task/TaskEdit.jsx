import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FormEditTask } from "../../components/task/FormEditTask";

export const TaskEdit = () => {
  const { identificator } = useParams();
  const { taskId } = useParams();

  return (
    <div className="cards-container">
      <Container className="mt-5">
        <Row>
          <Col xs="12" md="8" className="mt-1 mx-auto">
            <Card>
              <Card.Header>
                <div>Editar Tarea</div>
              </Card.Header>
              <Card.Body>
                <FormEditTask identificator={identificator}/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
