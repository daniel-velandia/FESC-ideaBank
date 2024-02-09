import React from "react";
import { Modal, Row, Col } from "react-bootstrap";


export const DetailModalTask = ({task, onHide, show}) => {

  

  return (
<Modal
  show={show}
  onHide={onHide}
  size="md"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header className="my-modal-header-PENDIENTE px-4" closeButton>
    <div className="my-badge-state-PENDIENTE">DETALLE DE TAREA</div>
  </Modal.Header>
  <Modal.Body className="px-4 pt-5 ms-2 me-2 text-lg">
    <Row>
      <Col xs="12" className="mb-4">
        <strong className="h3">{task.title}</strong>
      </Col>
      <Col xs="12" className="mb-2" >
        <strong>Usuario asignado</strong>
        <p className="text-lg">{task.assignedUser}</p>
      </Col>
      <Col xs="12"className="mb-2">
        <strong>Descripción</strong>
        <p className="text-lg">{task.description}</p>
      </Col>
      <Col xs="12" className="mb-2">
        <strong>Fecha de Inicio</strong>
        <p className="text-lg">{task.creationDate}</p>
      </Col>
      <Col xs="12" className="mb-2">
        <strong>Fecha de finalización</strong>
        <p className="text-lg">{task.finishDate}</p>
      </Col>
    </Row>
  </Modal.Body>
</Modal>
  );
};
