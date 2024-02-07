import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { PROPOSAL_UPDATE_STATES_POST_ENDPOINT } from '../../connections/helpers/endpoints';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import { refresh } from '../../states/pageReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ListDirectorProject } from './ListDirectorProject';
import ToastError from '../ToastError';

function MyVerticallyCenteredModal({ show, onHide, setDirector, onClickApproved }) {
  
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='my-modal-header px-4' closeButton>
          <div className='my-badge-state'>#</div>
      </Modal.Header>
      <Modal.Body className='px-4 pt-5'>
        <Row>
          <Col xs="12">
            <ListDirectorProject ondirectorselect={setDirector} />
          </Col>
          <Col xs="12" className='d-flex justify-content-end'>
            <Button
              type="submit"
              variant="danger"
              className="my-modal-button"
              onClick={onClickApproved}
            >
              Aprobar
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

function ModalProjectApproved() {
  const [modalShow, setModalShow] = useState(false);
  const [selectDirector, setselectDirector] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const isNeededRefresh = useSelector(state => state.page.isNeededRefresh);
  const dispatch = useDispatch();

  const handleDirectorSelect = (selectedDirector) => {
    setselectDirector(selectedDirector);
  };
  
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const approved = searchParams.get('approved');

  useEffect(() => {
    if (approved) {
      setModalShow(true);
    } else {
        setModalShow(false);
    }
  }, [approved, location]);

  const hideModal = () => {
    setModalShow(false);
    searchParams.delete('approved');
    const newSearch = searchParams.toString();
    const newPath = newSearch ? `${location.pathname}?${newSearch}` : location.pathname;
    navigate(newPath);
  };

  const handleButtonClickApprove = () => {
    setErrorMessage(null);
    const PojectDataApprove = {
      identificator: approved,
      status: "APROBADO",
      directEmail: selectDirector,
    };
    

    if (PojectDataApprove.directEmail === "") {
      setErrorMessage("Tiene que seleccionar un director para el proyecto");
    } else {
        axios
      .post(PROPOSAL_UPDATE_STATES_POST_ENDPOINT, PojectDataApprove )
      .then((res) => {
        hideModal();
        dispatch(refresh({ isNeededRefresh: !isNeededRefresh }));
      })
      .catch((err) => {
        console.error("Error al APROBAR proyecto:", err);
      });
    }
  };

  const renderToastError = () => {
    if (errorMessage) {
      return <ToastError message={errorMessage} />;
    }
    return null;
  };
  
  return (
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => hideModal()}
        setDirector={setselectDirector}
        onClickApproved={() => handleButtonClickApprove()}
      />
  );
}

export { ModalProjectApproved };
