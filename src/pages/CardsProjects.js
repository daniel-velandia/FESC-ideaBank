// CardsProjects.js
import React from "react";
import CardProject from "../components/CardProject";
import "../css/style.css";

import image3 from "../img/imagen 3.png";

const cards = [
  {
    id: 1,
    title: "SIBIES",
    imageSource: image3,
    url: "",
  },
  {
    id: 2,
    title: "PROYECTANDO",
    imageSource: image3,
    url: "",
  },
  {
    id: 3,
    title: "FESC GO",
    imageSource: image3,
    url: "",
  },
];

function CardsProjects() {
  return (
    <div className="cards-container">
      <div className="container d-flex justify-content-center align-items-center h-100 mt-5">
        <div className="row">
          {cards.map(({ title, imageSource, url, id }) => (
            <div className="col-md-4" key={id}>
              <CardProject imageSource={imageSource} title={title} url={url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardsProjects;
