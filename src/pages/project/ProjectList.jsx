// CardsProjects.js
import React from "react";
import CardProject from "../../components/CardProject";
import "../../css/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { CreateProposalModal } from "../../components/ModalProposal";
import image1 from "../../img/imagen 1.jpg";
import image2 from "../../img/imagen 2.jpg";
import image4 from "../../img/imagen 4.jpg";


const cards = [
  {
    id: 1,
    title: "Verde Esperanza",
    imageSource: image1,
    url: "",
    text: `Damos la bienvenida a "Verde Esperanza", un proyecto dedicado a la promoción de prácticas sostenibles y al impulso de la conciencia ambiental en nuestra comunidad.`
  },
  {
    id: 2,
    title: "Conectando Mentes, Construyendo Futuros",
    imageSource: image2,
    url: "",
    text: `¡Bienvenidos a "Conectando Mentes, Construyendo Futuros"! Este proyecto tiene como objetivo principal derribar barreras y promover la inclusión educativa para todos. `
  },
  {
    id: 3,
    title: "EcoVida",
    imageSource: image4,
    url: "",
    text: `Te damos la bienvenida a "EcoVida", un proyecto dedicado a fomentar el desarrollo sostenible en nuestra comunidad.`
  },
];

function ProjectList() {
  return (
    <div className="cards-container">
      <Container className="mt-5">
      <CreateProposalModal  />
        <Row>
          {cards.map(({ title, imageSource, url, id, text }) => (
            <Col key={id} xs={12} md={6} lg={6} className="mb-4">
              <CardProject text={text} imageSource={imageSource} title={title} url={url} />
              
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export { ProjectList };
