import { Card, Row, Col, Form, Button } from "react-bootstrap";
import { ListDirectorProject } from "./ListDirectorProject";
import { useState } from "react";
import ToastError from "./ToastError";
import axios from "axios";
import { PROPOSAL_UPDATE_STATES_POST_ENDPOINT } from "../connections/helpers/endpoints";
import { useNavigate } from "react-router-dom";

export const ProjectPendingStatus = ({project}) => {
  const [selectDirector, setselectDirector] = useState("");
  const navigation = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleDirectorSelect = (selectedDirector) => {
    setselectDirector(selectedDirector);
  };

  const handleButtonClickReject = () => {
    const projectDataReject = {
        identificator: project.identificator,
        status: "RECHAZADO"
    }
    axios
    .post(PROPOSAL_UPDATE_STATES_POST_ENDPOINT, projectDataReject )
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error("Error al RECHAZAR proyecto:", err);
    });
  };
  const handleButtonClickApprove = () => {
    setErrorMessage(null);
    const PojectDataApprove = {
      identificator: project.identificator,
      status: "APROBADO",
      directEmail: selectDirector,
    };
    

    if (PojectDataApprove.directEmail === "") {
      setErrorMessage("Tiene que seleccionar un director para el proyecto");
    } else {
        axios
      .post(PROPOSAL_UPDATE_STATES_POST_ENDPOINT, PojectDataApprove )
      .then((res) => {
        navigation("/")

      })
      .catch((err) => {
        console.error("Error al APROBAR proyecto:", err);
      });
    }
  };

  const renderToastError = () => {
    if (errorMessage) {
      return <ToastError message={errorMessage} />;
    }
    return null;
  };

  

  return (
    <>
      <Card className="w-100">
        <Card.Header className={`my-header-project-PENDIENTE`}>
          <div className={`my-badge-state-PENDIENTE`}>PENDIENTE</div>
        </Card.Header>
        <Card.Body>
          <Form className="px-3 mt-4">
            <Row>
              <Col sm="12" md="6" className="border-info-component">
                <h3>Valor de propuesta</h3>
                <p>{project.valueProposal} </p>
                <h3 className="mt-4">Descripcion</h3>
                <p>{project.description}</p>
                <h3 className="mt-4">Usuario</h3>
                <p>{project.nameUserCreator}</p>
                <p className="mt-4">{project.creationDate}</p>
              </Col>
              <Col
                sm="12"
                md="6"
                className="d-flex flex-column justify-content-between"
              >
                <h3>Director del proyecto</h3>
                <ListDirectorProject ondirectorselect={handleDirectorSelect} />
                <div className="d-flex justify-content-end mt-auto ">
                  <Button
                    type="button"
                    variant="danger"
                    style={{
                      backgroundColor: "#9c0f06",
                      width: "fit-content",
                      marginRight: "10px",
                    }}
                    onClick={handleButtonClickReject}
                  >
                    RECHAZAR
                  </Button>
                  <Button
                    type="button"
                    variant="success"
                    style={{ backgroundColor: "#4baf4f", width: "fit-content" }}
                    onClick={handleButtonClickApprove}
                  >
                    APROBAR
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      {renderToastError()}
    </>
  );
};
