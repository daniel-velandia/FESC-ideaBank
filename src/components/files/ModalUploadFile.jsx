import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ButtonUploadFile } from './ButtonUploadFile';
import { useState } from 'react';

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
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalUploadFile({ identificator, isProject }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        identificator={identificator}
        isProject={isProject}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export { ModalUploadFile };
