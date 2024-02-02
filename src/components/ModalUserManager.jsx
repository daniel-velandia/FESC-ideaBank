import { Modal, ListGroup, Button } from "react-bootstrap";
import { useState,  } from "react";

export const ModalUserManager = ({
  isOpen,
  closeModal,
  docenteUsers,
  onDocenteSelect,
}) => {
  const [selectedDocenteUser, setSelectedDocenteUser] = useState(null);

  const handleStudentClick = (docenteUser) => {
    setSelectedDocenteUser(docenteUser);
  };

  const handleConfirm = () => {
    if (selectedDocenteUser) {
      const docenteWithManagerFlag = {
        email: selectedDocenteUser.email,
        isManager: "yes",
      };
      onDocenteSelect(docenteWithManagerFlag);
    }
    closeModal();
  };


  return (
    <>
      <Modal
        show={isOpen}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="my-modal-header px-4" closeButton>
          <div className="my-badge-state">Escoger Encargado</div>
        </Modal.Header>
        <Modal.Body>
          <div
            className="mt-4"
            style={{ maxHeight: "320px", overflowY: "auto" }}
          >
            <ListGroup>
              {docenteUsers.map((docenteUser) => (
                <ListGroup.Item
                  key={docenteUser.email}
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      selectedDocenteUser === docenteUser ? "#f0f0f0" : "white",
                  }}
                  onClick={() => handleStudentClick(docenteUser)}
                >
                  {docenteUser.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirm}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
