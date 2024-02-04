import React, { useEffect, useState } from "react";
import CardProject from "../../components/CardProject";
import "../../css/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { CreateProposalModal } from "../../components/CreateProposalModal";
import axios from "axios";
import validator from "validator";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import {
  PROPOSAL_CREATE_POST_ENDPOINT,
  PROPOSAL_LIST_GET_ENDPOINT,
} from "../../connections/helpers/endpoints";
import ToastError from "../../components/ToastError";
import ToastSucces from "../../components/ToastSucces";
import { useLocation } from "react-router-dom";
import { ModalProjectDetail } from "../../components/ModalProjectDetail";
import { useSelector } from "react-redux";
import { ModalProjectApproved } from "../../components/ModalProjectApproved";

function ProjectList() {
  const isNeededRefresh = useSelector(state => state.project.isNeededRefresh);
  const [errorMessage, setErrorMessage] = useState(null);
  const [succesMessage, setsuccesMessage] = useState("");
  const [projects, setProjects] = useState();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const filter = searchParams.get("filter");

  useEffect(() => {
    axios
      .get(`${PROPOSAL_LIST_GET_ENDPOINT}?isAll=${!filter ? true : false}`)
      .then((res) => setProjects(res.data))
      .catch((err) => {});
  }, [filter, isNeededRefresh]);

  const createProposal = async (proposal) => {
    setErrorMessage(null);
    setsuccesMessage("");
    const error = {};

    if (validator.isEmpty(proposal.valueProposal)) {
      error.valueProposal = "El valor de la propuesta no puede estar vacio";
    }

    if (validator.isEmpty(proposal.description)) {
      error.description = "La descripcion no puede estar vacia";
    }

    if (!isEmptyObject(error)) {
      setErrorMessage(error);
    } else {
      const token = localStorage.getItem("token");
      axios
        .post(PROPOSAL_CREATE_POST_ENDPOINT, proposal, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setsuccesMessage("Propuesta creada con exito");
        })
        .catch((err) => setErrorMessage(err.response.data));
    }
  };

  const renderToastError = () => {
    if (errorMessage) {
      return <ToastError message={errorMessage} />;
    }
    return null;
  };
  const renderToastSucces = () => {
    if (succesMessage) {
      return <ToastSucces message={succesMessage} />;
    }
    return null;
  };

  return (
    <div className="cards-container">
      <Container className="mt-5">
      <h2 className="titleCard"><strong>Proyectos</strong></h2>
        <ModalProjectApproved />
        <ModalProjectDetail />
        <CreateProposalModal callback={createProposal} />
        <Row>
          {projects &&
            projects.map((project, index) => (
              <Col
                key={index}
                xs={12}
                sm={8}
                md={6}
                lg={4}
                xl={3}
                className="mb-4"
              >
                <CardProject project={project} />
              </Col>
            ))}
        </Row>
        {renderToastError()}
        {renderToastSucces()}
      </Container>
    </div>
  );
}

export { ProjectList };
