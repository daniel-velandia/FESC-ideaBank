// CardProject.js
import React from "react";
import PropTypes from "prop-types";
import "../css/style.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardProject({ imageSource, title, text, url, estado }) {
  return (
    
    <div className={`card card-project card-${estado}`}>
      <div className="card-header"></div>
      <div className="status-indicator">
        <div className={`status-indicator__dot status-${estado}`}>
          <span className="status-text">{estado}</span>
        </div>
      </div>
      <div className="card-body">
        <h5>{title}</h5>
        <p>Contenido del proyecto</p>{" "}
        {/* Agrega el contenido del proyecto aquí */}
        <span>17/12/2023</span>
      </div>
    </div>
  );
}

CardProject.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string,
};

export default CardProject;
