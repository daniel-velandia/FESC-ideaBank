import React, { useState } from "react";
import CardProject from "../../components/CardProject";
import "../../css/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { CreateProposalModal } from "../../components/CreateProposalModal";
import image1 from "../../img/imagen 1.jpg";
import image2 from "../../img/imagen 2.jpg";
import image4 from "../../img/imagen 4.jpg";
import axios from "axios";
import validator from "validator";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import { PROPOSAL_CREATE_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import ToastError from "../../components/ToastError";
import ToastSucces from "../../components/ToastSucces";
import { CreateModalTarea } from "../../components/CreateModalTarea";

const cards = [
  {
    id: 1,
    title: "Verde Esperanza",
    imageSource: image1,
    url: "",
    text: `Damos la bienvenida a "Verde Esperanza", un proyecto dedicado a la promoción de prácticas sostenibles y al impulso de la conciencia ambiental en nuestra comunidad.`,
  },
  {
    id: 2,
    title: "Conectando Mentes",
    imageSource: image2,
    url: "",
    text: `¡Bienvenidos a "Conectando Mentes"! Este proyecto tiene como objetivo principal derribar barreras y promover la inclusión educativa para todos nuestros alumnos. `,
  },
  {
    id: 3,
    title: "EcoVida",
    imageSource: image4,
    url: "",
    text: `Te damos la bienvenida a "EcoVida", un proyecto dedicado a fomentar el desarrollo sostenible en nuestra comunidad.`,
  },
];

function ProjectList() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [succesMessage, setsuccesMessage] = useState("");

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
          setsuccesMessage("Propuesta creada con exito")
        })
        .catch((err) =>
          setErrorMessage(err.response.data)
        );
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
        <CreateProposalModal callback={createProposal} />
        <CreateModalTarea />
        <Row>
          {cards.map(({ title, imageSource, url, id, text }) => (
            <Col key={id} xs={12} md={6} lg={6} className="mb-4">
              <CardProject
                text={text}
                imageSource={imageSource}
                title={title}
                url={url}
              />
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
