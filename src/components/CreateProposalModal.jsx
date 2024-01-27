import React, { useState } from "react";
import { Col, Row, Form, Button, Modal } from "react-bootstrap";

export const CreateProposalModal = ({ callback }) => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    valueProposal: "",
    description: "",
  });

  const handleModalShow = () => {
    setShowModal(true);
    setFormSubmitted(false);
    setFormErrors({
      valueProposal: "",
      description: "",
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFormSubmitted(false);
  };

  const [formData, setFormData] = useState({
    valueProposal: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendResponse = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.values(errors).every((error) => error === "")) {
      console.log(formData);
      callback(formData);
      handleModalClose();
    }
  };

  const validateForm = (data) => {
    const errors = {
      valueProposal:
        data.valueProposal.trim() === ""
          ? "Este campo no puede estar vacío"
          : "",
      description:
        data.description.trim() === "" ? "Este campo no puede estar vacío" : "",
    };
    return errors;
  };

  return (
    <>
      <Button variant="primary" onClick={handleModalShow}>
        Abrir Modal
      </Button>

      <Modal
        show={showModal}
        onHide={handleModalClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ backgroundColor: "#9c0f06", color: "white" }}
          closeButton
        >
          <Modal.Title className="text-center">Crear Propuesta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendResponse} className="px-3">
            <Row>
              <Col sm="12">
                <Form.Group className="mb-4" controlId="valueProposal">
                  <Form.Control
                    size="lg"
                    type="text"
                    name="valueProposal"
                    placeholder="Ingrese el valor de la propuesta"
                    value={formData.valueProposal}
                    onChange={handleChange}
                    isInvalid={formSubmitted && formErrors.valueProposal !== ""}
                  />

                  <Form.Control.Feedback type="invalid">
                    {formSubmitted && formErrors.valueProposal}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm="12">
                <Form.Group className="mb-4" controlId="description">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    size="lg"
                    name="description"
                    placeholder="Ingrese la descripción"
                    value={formData.description}
                    onChange={handleChange}
                    isInvalid={formSubmitted && formErrors.description !== ""}
                  />

                  <Form.Control.Feedback type="invalid">
                    {formSubmitted && formErrors.description}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <div className="text-center">
              <Button
                type="submit"
                variant="danger"
                className="mt-3"
                style={{ backgroundColor: "#9c0f06", width: "fit-content" }}
              >
                Crear Propuesta
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
