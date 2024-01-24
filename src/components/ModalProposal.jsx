import React, { useState } from "react";
import { Col, Row, Form, Button, Modal } from "react-bootstrap";
import { SelectUserRol } from "./SelectUserRol";

export const CreateProposalModal = ({ callback }) => {
    const [showModal, setShowModal] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({
        valueProposal: "",
        descripcion: "",
        state: "",
    });

    const handleModalShow = () => {
        setShowModal(true);
        setFormSubmitted(false);
        setFormErrors({
            valueProposal: "",
            descripcion: "",
            state: "",
        });
    };

    const handleModalClose = () => {
        setShowModal(false);
        setFormSubmitted(false);
    };

    const [formData, setFormData] = useState({
        valueProposal: "",
        descripcion: "",
        state: "",
    });

    const handleSelectChange = (fieldName, selectedValue) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: selectedValue,
        }));
    };

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

        // Realiza las validaciones aquí y actualiza el estado de formErrors
        const errors = validateForm(formData);
        setFormErrors(errors);

        // Si no hay errores, llama al callback
        if (Object.values(errors).every((error) => error === "")) {
            callback(formData);
            handleModalClose();
        }
    };

    const validateForm = (data) => {
        const errors = {
            valueProposal: data.valueProposal.trim() === "" ? "Este campo no puede estar vacío" : "",
            descripcion: data.descripcion.trim() === "" ? "Este campo no puede estar vacío" : "",
            state: data.state.trim() === "" ? "Este campo no puede estar vacío" : "",
        };
        return errors;
    };

    return (
        <>
            <Button variant="primary" onClick={handleModalShow}>
                Abrir Modal
            </Button>

            <Modal show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header style={{ backgroundColor: "#9c0f06", color: "white" }} closeButton>
                    <Modal.Title className="text-center">Crear Propuesta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={sendResponse} className="px-3">
                        <Row>
                            <Col sm="12">
                                <Form.Group className="mb-4" controlId="valueProposal">
                                    <Form.Label>Valor de la Propuesta</Form.Label>
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
                                <Form.Group className="mb-4" controlId="descripcion">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        size="lg"
                                        name="descripcion"
                                        placeholder="Ingrese la descripción"
                                        value={formData.descripcion}
                                        onChange={handleChange}
                                        isInvalid={formSubmitted && formErrors.descripcion !== ""}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {formSubmitted && formErrors.descripcion}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm="12">
                                <Form.Group className="mb-4" controlId="state">
                                    <Form.Label>Estado</Form.Label>
                                    <SelectUserRol onSelect={(selectedValue) => handleSelectChange("state", selectedValue)} />
                                    <Form.Control.Feedback type="invalid">
                                        {formSubmitted && formErrors.state}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="text-center">
                            <Button type="submit" variant="primary" className="mt-3" style={{ backgroundColor: "#e30513", width: "fit-content" }}>
                                Crear Propuesta
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};
