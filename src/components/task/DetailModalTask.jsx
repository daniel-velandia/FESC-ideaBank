import React, { useEffect, useState } from "react";
import { Modal, Row, Col, Button, Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { upload } from "../../states/uploadFileReducer";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { TASK_DETAIL_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import ButtonDownloadFile from "../files/ButtonDownloadFile";
import { Upload } from "react-bootstrap-icons";
import PermissionCheck from "../PermissionCheck";
import { roles } from "../../utils/roles";

export const DetailModalTask = () => {

  const [modalShow, setModalShow] = useState(false);
  const [task, setTask] = useState({});

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('taskId');

  const onHide = () => {
    setModalShow(false);
    searchParams.delete("taskId");
    const newSearch = searchParams.toString();
    navigate(newSearch);
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`${TASK_DETAIL_GET_ENDPOINT}?identificator=${id}`)
        .then((res) => {
          setTask(res.data);
          setModalShow(true)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleUploadFile = () => {
    dispatch(upload({ id: task.identificator }));
    onHide();
  }

  const onClickInEditTask = () => {
    searchParams.delete("taskId");
    //let url = ?taskEdit=${idTask};
    let url = `${location.pathname}/taskEdit/${task.identificator}`;
    navigate(url);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Cargar archivo
    </Tooltip>
  );

  return (
    <Modal
      show={modalShow}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="my-modal-header-PENDIENTE px-4" closeButton>
        <div className="my-badge-state-PENDIENTE">DETALLE DE TAREA</div>
      </Modal.Header>
      <Modal.Body className="px-4 pt-5 me-2 ms-2">
      <Row>
      <Col xs="12" className="mb-4">
        <strong className="h3">{task.title}</strong>
      </Col>
      <Col xs="12" className="mb-2" >
        <strong>Usuario asignado</strong>
        <p className="text-lg">{task.assignedUser}</p>
      </Col>
      <Col xs="12"className="mb-2">
        <strong>Descripción</strong>
        <p className="text-lg">{task.description}</p>
      </Col>
      <Col xs="12" className="mb-2">
        <strong>Fecha de Inicio</strong>
        <p className="text-lg">{task.creationDate}</p>
      </Col>
      <Col xs="12" className="mb-2">
        <strong>Fecha de finalización</strong>
        <p className="text-lg">{task.finishDate}</p>
      </Col>
          
          <Col xs="6" className="mt-4  mb-2">
            <h4>Archivos</h4>
          </Col>
          <Col xs="6" className="text-end mt-4 mb-2">
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Button
                variant="ligth"
                style={{ backgroundColor: "#EBEBEB" }}
                onClick={() => handleUploadFile()}
              >
                <Upload />
              </Button>
            </OverlayTrigger>
          </Col>
          {task.files && task.files.length > 0 &&
          <Col xs="12">
            <Table responsive>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descargar</th>
                </tr>
              </thead>
              <tbody>
                  {task.files.map((file, index) => {
                    return (
                      <tr key={index}>
                        <td>{file}</td>
                        <td className="text-end">
                          <ButtonDownloadFile
                            identificator={task.identificator}
                            isProject={"no"}
                            filename={file}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Col>
          
          }
        </Row>
        <Col xs="12" className="d-flex justify-content-end mt-4">
            <PermissionCheck
              requiredRoles={[roles.DIRECTOR, roles.TEACHER, roles.STUDENT]}
            >
                  <Button
                    type="button"
                    variant="success"
                    className="my-modal-button-pending"
                    onClick={onClickInEditTask}
                  >
                    Editar
                  </Button>
            </PermissionCheck>
          </Col>
      </Modal.Body>
    </Modal>
  );
};
