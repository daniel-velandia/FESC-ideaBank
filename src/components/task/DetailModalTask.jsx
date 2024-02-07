import React, { useEffect, useState } from "react";
import { TASK_DETAIL_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Modal } from "react-bootstrap";

export const DetailModalTask = () => {
  const [task, settask] = useState({});
  const [modalShow, setModalShow] = useState(false);


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idTask = searchParams.get("taskId");

  useEffect(() => {
    if (idTask) {
      axios
        .get(`${TASK_DETAIL_GET_ENDPOINT}?identificator=${idTask}`)
        .then((res) => {
          settask(res.data);
          console.log(res);
          setModalShow(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [idTask, location]);

  return (
    <Modal
      show={modalShow}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="my-modal-header px-4" closeButton>
        <div className="my-badge-state">{project.status}</div>
      </Modal.Header>
      <Modal.Body className="px-4 pt-5">
        <Row>
          <Col xs="12" className="mb-4">
            <strong className="h3">{project.company}</strong>
          </Col>
          <Col xs="12" sm="6">
            <strong>Valor de la propuesta</strong>
          </Col>
          <Col xs="12" sm="6" className="text-sm-end">
            <p>{project.valueProposal}</p>
          </Col>
          <Col xs="12" sm="6">
            <strong>Descripción</strong>
          </Col>
          <Col xs="12" sm="6" className="text-sm-end">
            <p>{project.description}</p>
          </Col>
          <Col xs="12" sm="6">
            <strong>Creado por</strong>
          </Col>
          <Col xs="12" sm="6" className="text-sm-end">
            <p>{project.nameUserCreator}</p>
          </Col>
          <Col xs="12" sm="6">
            <strong>Fecha</strong>
          </Col>
          <Col xs="12" sm="6" className="text-sm-end">
            <p>{project.creationDate}</p>
          </Col>
          <Col xs="12" className="d-flex justify-content-end">
            <PermissionCheck requiredRoles={[roles.VALIDATOR]}>
              {project.status === status.PENDING && (
                <>
                  <ButtonProjectReject project={project} onHide={onHide} />
                  <Button
                    type="submit"
                    variant="danger"
                    className="my-modal-button"
                    onClick={onClickApproved}
                  >
                    Aprobar
                  </Button>
                </>
              )}
            </PermissionCheck>
            <PermissionCheck requiredRoles={[roles.DIRECTOR]}>
              {project.status === status.APPROVED && (
                <Button
                  as={NavLink}
                  to={`/project/detail?id=${project.identificator}`}
                  type="submit"
                  variant="danger"
                  className="my-modal-button"
                >
                  Editar
                </Button>
              )}
            </PermissionCheck>
            <PermissionCheck
              requiredRoles={[roles.DIRECTOR, roles.TEACHER, roles.STUDENT]}
            >
              {project.status === status.IN_PROGRESS && (
                <Button
                  as={NavLink}
                  to={`/table/task/${project.identificator}`}
                  type="submit"
                  variant="danger"
                  className="my-modal-button"
                >
                  Tareas
                </Button>
              )}
            </PermissionCheck>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
