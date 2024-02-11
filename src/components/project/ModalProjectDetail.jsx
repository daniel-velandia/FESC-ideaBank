import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { PROPOSAL_DETAIL_GET_ENDPOINT } from '../../connections/helpers/endpoints';
import axios from 'axios';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import PermissionCheck from '../PermissionCheck';
import { roles } from '../../utils/roles';
import { status } from '../../utils/status';
import { ButtonProjectReject } from './ButtonProjectReject';

function MyVerticallyCenteredModal({ project, show, onHide, onClickApproved }) {
  
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={`my-modal-header-${project.status} px-4`} closeButton>
          <div className={`my-badge-state-${project.status}`}>{project.status}</div>
      </Modal.Header>
      <Modal.Body className='px-4 pt-5 ms-2 text-lg-start'>
        <Row>
        <Col xs="12" className='mb-4'>
  <Row >
    <Col xs="12">
      <strong className="h3">{project.company}</strong>
    </Col>
  </Row>
</Col>

<Col xs="12" className="mb-2">
  <Row>
    <Col xs="12">
      <strong>Propuesta de valor</strong>
      <p>{project.valueProposal}</p>
    </Col>
  </Row>
</Col>

<Col xs="12" className='mb-2'>
  <Row>
    <Col xs="12">
      <strong>Descripción</strong>
      <p>{project.description}</p>
    </Col>
  </Row>
</Col>

<Col xs="12" className='mb-2'>
  <Row>
    <Col xs="12">
      <strong>Creado por</strong>
      <p>{project.nameUserCreator}</p>
    </Col>
  </Row>
</Col>

<Col xs="12" className='mb-2'>
  <Row>
    <Col xs="12">
      <strong>Fecha</strong>
      <p>{project.creationDate}</p>
    </Col>
  </Row>
</Col>
          <Col xs="12" className='d-flex justify-content-end'>
            <PermissionCheck requiredRoles={[roles.VALIDATOR]}>
              {project.status === status.PENDING && (
                <>
                  <ButtonProjectReject project={project} onHide={onHide} />
                  <Button
                      type="submit"
                      variant="success"
                      className="my-modal-button-approve"
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
                    variant="success"
                    className="my-modal-button-approve"
                  >
                    Editar
                </Button>
              )}
            </PermissionCheck>
            <PermissionCheck requiredRoles={[roles.DIRECTOR, roles.TEACHER, roles.STUDENT]}>
              {project.status === status.IN_PROGRESS && (
                <Button
                    as={NavLink}
                    to={`/table/task/${project.identificator}`}
                    type="submit"
                    variant="warning"
                    className="my-modal-button-task"
                  >
                    Tareas
                </Button>
              )}
            </PermissionCheck>
            <PermissionCheck requiredRoles={[roles.DIRECTOR]}>
              {project.status === status.IN_PROGRESS && (
                <Button
                as={NavLink}
                to={`/project/detail?id=${project.identificator}`}
                type="submit"
                variant="primary"
                className="my-modal-button-approve ms-4"
              >
                Editar proyecto
            </Button>
              )}
            </PermissionCheck>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

function ModalProjectDetail() {
  const [modalShow, setModalShow] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get('q');
  const [project, setProject] = useState({});

  useEffect(() => {
    if (q) {
      axios.get(`${PROPOSAL_DETAIL_GET_ENDPOINT}?identificator=${q}`)
      .then(res => {
        setProject(res.data);
        setModalShow(true);
        console.log(res.data);
      })
      .catch(err => {
        setModalShow(false);
      });
    }
  }, [q, location]);

  const hideModal = () => {
    setModalShow(false);
    searchParams.delete('q');
    const newSearch = searchParams.toString();
    const newPath = newSearch ? `${location.pathname}?${newSearch}` : location.pathname;
    navigate(newPath);
  };

  const showModalApproved = () => {
    hideModal();
    searchParams.set('approved', project.identificator);
    const newSearch = searchParams.toString();
    const newPath = newSearch ? `${location.pathname}?${newSearch}` : location.pathname;
    navigate(newPath);
  };

  return (
      <MyVerticallyCenteredModal
        project={project}
        show={modalShow}
        onHide={() => hideModal()}
        onClickApproved={() => showModalApproved()}
      />
  );
}

export { ModalProjectDetail };
