import React, { useState } from 'react';
import { Modal, Button, Form, FloatingLabel, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';

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

  const styleIcon = {
    fontSize: "140%"
  }

  const styleButton = {
      height: "20%"
  }

  const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
          Haz clic para crear una tarea
      </Tooltip>
  )

  return (
    <>

        <OverlayTrigger
          placement="left"
          delay={{ show: 100, hide: 100 }}
          overlay={renderTooltip}
        >
          <Button variant="light" style={styleButton} className='mt-2' onClick={handleMostrarModal}><BsPlus style={styleIcon}/></Button>
        </OverlayTrigger>

                <Modal show={showModal} 
      onHide={handleOcultarModal} 
      size="lg" 
      aria-labelledby="contained-modal-title-vcenter" 
      centered>

      <Modal.Header className='my-modal-header px-4 mb-5' closeButton>
          <div className='my-badge-state'>Crear Tarea</div>
      </Modal.Header>
                <Modal.Body>

                  
                    <Form>
                    <Row>
                      <Col>
                    <Form.Group controlId="nombreTarea" className="mb-4">
                    <FloatingLabel controlId="floatingSelect" label="Titulo de la tarea">
                        <Form.Control
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        style={{ height: "50px" }} 
                        />
                        {errores.nombre && <Form.Text className="text-danger">{errores.nombre}</Form.Text>}
                        </FloatingLabel>
                    </Form.Group>


                    
                    <Form.Group controlId="fechaTarea" className="mb-4" >
                    <FloatingLabel controlId="floatingSelect" label="Fecha Limite">
                        <Form.Control
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        style={{ height: "50px" }} 
                        />
                        {errores.fecha && <Form.Text className="text-danger">{errores.fecha}</Form.Text>}
                        </FloatingLabel>                       
                    </Form.Group>
                    </Col>
                    </Row>

                    <Form.Group controlId="cargoTarea"  className="mb-4">
                      <FloatingLabel controlId="floatlabel3" label="Cargo">
                        <Form.Select
                        as="select"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        style={{ height: "50px" }} 
                        >
                        <option value="">Seleccione un cargo</option>
                        <option value="cargo1">Cargo 1</option>
                        <option value="cargo2">Cargo 2</option>
                        
                        </Form.Select>
                        {errores.cargo && <Form.Text className="text-danger">{errores.cargo}</Form.Text>}
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group controlId="descripcionTarea" className="mb-4">
                    <FloatingLabel controlId="floatingSelect" label="Descripción de la tarea">
                        <Form.Control
                        as="textarea"
                        rows={3}
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        style={{ height: "150px" }} 
                        />
                        {errores.descripcion && <Form.Text className="text-danger">{errores.descripcion}</Form.Text>}
                        </FloatingLabel>
                    </Form.Group>

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