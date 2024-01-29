import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export const CreateModalTarea = ({ show, onHide, onCrearTarea }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cargo, setCargo] = useState('');
  const [errores, setErrores] = useState({});

  const [showModal, setShowModal] = useState(false);

  const handleMostrarModal = () => {
    setShowModal(true);
  };

  const handleOcultarModal = () => {
    setShowModal(false);
  };

  const validarCampos = () => {
    const errores = {};

    if (!nombre.trim()) {
      errores.nombre = 'El nombre de la tarea es obligatorio';
    }

    if (!fecha.trim()) {
      errores.fecha = 'La fecha es obligatoria';
    }

    if (!descripcion.trim()) {
      errores.descripcion = 'La descripción es obligatoria';
    }

    if (!cargo.trim()) {
      errores.cargo = 'Seleccione un cargo';
    }

    setErrores(errores);

    return Object.keys(errores).length === 0;
  };

  const handleCrearTarea = () => {
    if (validarCampos()) {

      onCrearTarea({ nombre, fecha, descripcion, cargo });

      setNombre('');
      setFecha('');
      setDescripcion('');
      setCargo('');
      setErrores({});
      onHide(); 
    }
  };

  return (
    <>

                <Button variant="primary" onClick={handleMostrarModal}>
                    Crear Tarea
                </Button>

                <Modal show={showModal} onHide={handleOcultarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Tarea</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group controlId="nombreTarea">
                        <Form.Label>Nombre de la Tarea</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre de la tarea"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        />
                        {errores.nombre && <Form.Text className="text-danger">{errores.nombre}</Form.Text>}
                    </Form.Group>

                    <Form.Group controlId="fechaTarea">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        />
                        {errores.fecha && <Form.Text className="text-danger">{errores.fecha}</Form.Text>}
                    </Form.Group>

                    <Form.Group controlId="descripcionTarea">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Ingrese la descripción de la tarea"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        />
                        {errores.descripcion && <Form.Text className="text-danger">{errores.descripcion}</Form.Text>}
                    </Form.Group>

                    <Form.Group controlId="cargoTarea">
                        <Form.Label>Cargo</Form.Label>
                        <Form.Control
                        as="select"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        >
                        <option value="">Seleccione un cargo</option>
                        <option value="cargo1">Cargo 1</option>
                        <option value="cargo2">Cargo 2</option>
                        
                        </Form.Control>
                        {errores.cargo && <Form.Text className="text-danger">{errores.cargo}</Form.Text>}
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleOcultarModal}>
                    Cerrar
                    </Button>
                    <Button variant="danger" onClick={handleCrearTarea}>
                    Crear
                    </Button>
                </Modal.Footer>
                </Modal>

    </>
  );
};