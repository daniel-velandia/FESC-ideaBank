import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  FloatingLabel,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { SelectMemberTask } from "./SelectMemberTask";
import { TASK_PROJECT_CREATE_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import axios from "axios";
import { formatDate } from "../../utils/dateFormat";
import { Plus } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { refresh } from "../../states/pageReducer";
import { useDispatch, useSelector } from "react-redux";

export const CreateModalTarea = () => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cargo, setCargo] = useState("");
  const [errores, setErrores] = useState({});
  const { identificator } = useParams();
  
  const isNeededRefresh = useSelector(state => state.page.isNeededRefresh);
  const dispatch = useDispatch();

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
      errores.nombre = "El nombre de la tarea es obligatorio";
    }

    if (!fecha.trim()) {
      errores.fecha = "La fecha es obligatoria";
    }

    if (!descripcion.trim()) {
      errores.descripcion = "La descripción es obligatoria";
    }

    if (!cargo.trim()) {
      errores.cargo = "Seleccione un cargo";
    }

    setErrores(errores);

    return Object.keys(errores).length === 0;
  };

  const handleSelectChange = (selectedMemberTask) => {
    setCargo(selectedMemberTask);
  };

  const handleCrearTarea = () => {
    if (validarCampos()) {
      const fechaFormateada = formatDate(fecha);
      const dataCreateTask = {
        identificator: identificator,
        title: nombre,
        description: descripcion,
        assignedUser: cargo,
        finishDate: fechaFormateada,
      };

      axios
        .post(TASK_PROJECT_CREATE_POST_ENDPOINT, dataCreateTask)
        .then((res) => {
          console.log(res);
          setNombre("");
          setFecha("");
          setDescripcion("");
          setCargo("");
          setErrores({});
          handleOcultarModal();
          dispatch(refresh({ isNeededRefresh: !isNeededRefresh }));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Haz clic para crear una tarea
    </Tooltip>
  );

  return (
    <>
      <OverlayTrigger
        placement="left"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button
          variant="ligth"
          style={{ backgroundColor: "#EBEBEB" }}
          onClick={handleMostrarModal}
        >
          <Plus />
        </Button>
      </OverlayTrigger>

      <Modal
        show={showModal}
        onHide={handleOcultarModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="my-modal-header px-4 mb-5" closeButton>
          <div className="my-badge-state">Crear Tarea</div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="nombreTarea" className="mb-4">
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Titulo de la tarea"
                  >
                    <Form.Control
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      style={{ height: "50px" }}
                    />
                    {errores.nombre && (
                      <Form.Text className="text-danger">
                        {errores.nombre}
                      </Form.Text>
                    )}
                  </FloatingLabel>
                </Form.Group>

                <Form.Group controlId="fechaTarea" className="mb-4">
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Fecha Limite"
                  >
                    <Form.Control
                      type="date"
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                      style={{ height: "50px" }}
                    />
                    {errores.fecha && (
                      <Form.Text className="text-danger">
                        {errores.fecha}
                      </Form.Text>
                    )}
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>

            <SelectMemberTask
              idProject={identificator}
              value={cargo}
              errores={errores.cargo}
              onChange={handleSelectChange}
            />

            <Form.Group controlId="descripcionTarea" className="mb-4">
              <FloatingLabel
                controlId="floatingSelect"
                label="Descripción de la tarea"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  style={{ height: "150px" }}
                />
                {errores.descripcion && (
                  <Form.Text className="text-danger">
                    {errores.descripcion}
                  </Form.Text>
                )}
              </FloatingLabel>
            </Form.Group>

            <div style={{ textAlign: "right", marginBottom: "10px" }}>
              <Button
                type="button"
                variant="danger"
                className="my-modal-button"
                onClick={handleCrearTarea}
              >
                Crear
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
