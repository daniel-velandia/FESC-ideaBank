import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ButtonUploadFile } from './ButtonUploadFile';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { upload } from '../../states/uploadFileReducer';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ButtonUploadFile 
            identificator={props.identificator} 
            isProject={props.isProject}
            onHide={props.onHide}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalUploadFile() {
  const [modalShow, setModalShow] = useState(false);
  const id = useSelector(state => state.upload.id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setModalShow(id ? true : false);
  }, [id]);

  const handleModalShow = () => {
    navigate(`?taskId=${id}`);
    dispatch(upload({ id: "" }));
  };

  return (
    <MyVerticallyCenteredModal
      show={modalShow}
      identificator={id}
      isProject={"no"}
      onHide={() => handleModalShow()}
    />
  );
}

export { ModalUploadFile };
