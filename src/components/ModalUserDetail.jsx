import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { USER_DETAIL_POST_ENDPOINT } from '../connections/helpers/endpoints';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Badge, Col, Row } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header>
        <Modal.Title className='me-5' id="contained-modal-title-vcenter">
          {props.user.name} {props.user.lastName}
        </Modal.Title>
        <Badge bg="primary">{props.user.rol}</Badge>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs="12" sm="6">
            <strong>Correo</strong>
          </Col>
          <Col xs="12" sm="6" className='text-sm-end'>
            <p>{props.user.email}</p>
          </Col>
          <Col xs="12" sm="6">
            <strong>Telefono</strong>
          </Col>
          <Col xs="12" sm="6" className='text-sm-end'>
            <p>{props.user.cellPhone}</p>
          </Col>
          {
            props.user.companyName &&
            <div>
              <Col xs="12" sm="6">
                <strong>Empresa</strong>
              </Col>
              <Col xs="12" sm="6" className='text-sm-end'>
                <p>{props.user.companyName}</p>
              </Col>
            </div>
          }
          {
            props.user.program &&
            <div>
              <Col xs="12" sm="6">
                <strong>Programa</strong>
              </Col>
              <Col xs="12" sm="6" className='text-sm-end'>
                <p>{props.user.program}</p>
              </Col>
            </div>
          }
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalUserDetail() {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get('q');
  const [user, setUser] = useState({});

  useEffect(() => {
    if(q){
      axios.get(`${USER_DETAIL_POST_ENDPOINT}?email=${q}`)
      .then(res => {
        setUser(res.data)
        setModalShow(true)
        console.log(res.data)
      })
      .catch(err => console.log(err));
    }
  }, [q, location]);

  const hideModal = () => {
    setModalShow(false);
    searchParams.delete('q');
    const newSearch = searchParams.toString();
    const newPath = newSearch ? `${location.pathname}?${newSearch}` : location.pathname;
    navigate(newPath);
  };

  return (
      <MyVerticallyCenteredModal
        user={user}
        show={modalShow}
        onHide={() => hideModal()}
      />
  );
}

export { ModalUserDetail };
