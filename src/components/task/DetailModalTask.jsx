import React from "react";
import { Modal, Row, Col } from "react-bootstrap";


export const DetailModalTask = ({task, onHide, show}) => {

  

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="my-modal-header px-4" closeButton>
        <div className="my-badge-state">DETALLE  DE TAREA</div>
      </Modal.Header>
      <Modal.Body className="px-4 pt-5">
        <Row>
          <Col xs="12" className="mb-4">
            <strong className="h3">{task.title}</strong>
          </Col>
          <Col xs="12" sm="6">
            <strong>Usuario asignado</strong>
          </Col>
          <Col xs="12" sm="6" className="text-sm-end">
            <p>{task.assignedUser}</p>
          </Col>
          <Col xs="12" sm="6">
            <strong>Fecha de Incio</strong>
          </Col>
          <Col xs="12" sm="6" className="text-sm-end">
            <p>{task.creationDate}</p>
          </Col>
          <Col xs="12" sm="6">
            <strong>Fecha de finalizacion</strong>
          </Col>
          <Col xs="12" sm="6" className="text-sm-end">
            <p>{task.finishDate}</p>
          </Col>
          <Col xs="12" sm="6">
            <strong>Descripción</strong>
          </Col>
          <Col xs="12" sm="6" className="text-sm-end">
            <p>{task.description}</p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
