import React, { useState } from "react";
import { Col, Row, Form, Button, Modal } from "react-bootstrap";
import { SelectProgram } from "./SelectProgram";
import { SelectUserRol } from "./SelectUserRol";

export const CreateUserForm = ({ callback }) => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    cellPhone: "",
    password: "",
    repeatPassword: "",
    program: "",
    rol: "",
  });

  const handleModalShow = () => {
    setShowModal(true);
    setFormSubmitted(false);
    setFormErrors({
      name: "",
      lastName: "",
      email: "",
      cellPhone: "",
      password: "",
      repeatPassword: "",
      program: "",
      rol: "",
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFormSubmitted(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    cellPhone: "",
    password: "",
    repeatPassword: "",
    program: "",
    rol: "",
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
      name: data.name.trim() === "" ? "Este campo no puede estar vacío" : "",
      lastName: data.lastName.trim() === "" ? "Este campo no puede estar vacío" : "",
      email: isValidEmail(data.email) ? "" : "Por favor, ingrese un correo electrónico válido",
      cellPhone: data.cellPhone.trim() === "" ? "Este campo no puede estar vacío" : "",
      password: data.password.trim() === "" ? "Este campo no puede estar vacío" : "",
      repeatPassword: data.repeatPassword.trim() === "" ? "Este campo no puede estar vacío" : "",
      program: data.program.trim() === "" ? "Seleccione un programa" : "",
      rol: data.rol.trim() === "" ? "Seleccione un rol" : "",
    };
    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Button variant="primary" onClick={handleModalShow}>
        Abrir Modal
      </Button>

      <Modal show={showModal} 
      onHide={handleModalClose} 
      size="lg" 
      aria-labelledby="contained-modal-title-vcenter" 
      centered>

      <Modal.Header className='my-modal-header px-4' closeButton>
          <div className='my-badge-state'>Crear Usuario</div>
      </Modal.Header>

      <Modal.Body className='px-4 pt-5'>
          <Form onSubmit={sendResponse} className="px-3">
            <Row className="mt-4">
              <Col sm="12" md="6">
                <Form.Group className="mb-4" controlId="name">
                  <Form.Control
                    size="lg"
                    type="text"
                    name="name"
                    placeholder="Ingrese su nombre"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={formSubmitted && formErrors.name !== ""}
                    style={{ height: "45px" }} // Establecer la misma altura para todos los campos
                  />
                  <Form.Control.Feedback type="invalid">
                    {formSubmitted && formErrors.name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm="12" md="6">
                <Form.Group className="mb-4" controlId="lastName">
                  <Form.Control
                    size="lg"
                    type="text"
                    name="lastName"
                    placeholder="Ingrese su apellido"
                    value={formData.lastName}
                    onChange={handleChange}
                    isInvalid={formSubmitted && formErrors.lastName !== ""}
                    style={{ height: "45px" }} // Establecer la misma altura para todos los campos
                  />
                  <Form.Control.Feedback type="invalid">
                    {formSubmitted && formErrors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm="12" md="6">
                <Form.Group className="mb-4" controlId="email">
                  <Form.Control
                    size="lg"
                    type="email"
                    name="email"
                    placeholder="Ingrese su correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={formSubmitted && formErrors.email !== ""}
                    style={{ height: "45px" }} // Establecer la misma altura para todos los campos
                  />
                  <Form.Control.Feedback type="invalid">
                    {formSubmitted && formErrors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm="12" md="6">
                <Form.Group className="mb-4" controlId="cellPhone">
                  <Form.Control
                    size="lg"
                    type="number"
                    name="cellPhone"
                    placeholder="Ingrese su teléfono"
                    value={formData.cellPhone}
                    onChange={handleChange}
                    isInvalid={formSubmitted && formErrors.cellPhone !== ""}
                    style={{ height: "45px" }} // Establecer la misma altura para todos los campos
                  />
                  <Form.Control.Feedback type="invalid">
                    {formSubmitted && formErrors.cellPhone}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm="12" md="6">
                <Form.Group className="mb-4" controlId="password">
                  <Form.Control
                    size="lg"
                    type="password"
                    name="password"
                    placeholder="Ingrese su contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={formSubmitted && formErrors.password !== ""}
                    style={{ height: "45px" }} // Establecer la misma altura para todos los campos
                  />
                  <Form.Control.Feedback type="invalid">
                    {formSubmitted && formErrors.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm="12" md="6">
                <Form.Group className="mb-4" controlId="repeatPassword">
                  <Form.Control
                    size="lg"
                    type="password"
                    name="repeatPassword"
                    placeholder="Repita su contraseña"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                    isInvalid={formSubmitted && formErrors.repeatPassword !== ""}
                    style={{ height: "45px" }} // Establecer la misma altura para todos los campos
                  />
                  <Form.Control.Feedback type="invalid">
                    {formSubmitted && formErrors.repeatPassword}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm="12" md="6">
                <Form.Group className="mb-4" controlId="program">
                  <SelectProgram onSelect={handleSelectChange} style={{ height: "45px" }} />
                  <Form.Control.Feedback type="invalid">
                    {formSubmitted && formErrors.program}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm="12" md="6">
                <Form.Group className="mb-4" controlId="rol">
                  <SelectUserRol onSelect={handleSelectChange} style={{ height: "45px" }} />
                  <Form.Control.Feedback type="invalid">
                    {formSubmitted && formErrors.rol}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <div style={{ textAlign: "right", marginBottom: "10px" }}>
              <Button type="submit" variant="danger" className="my-modal-button">
                Crear
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
