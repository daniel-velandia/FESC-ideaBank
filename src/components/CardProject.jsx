// CardProject.js
import React from "react";
import PropTypes from "prop-types";
import "../css/style.css";
import { NavLink } from "react-router-dom";

function CardProject({ project }) {
  return (
    <NavLink to={`/project/detail/${project.identificator}`} className="text-decoration-none">
      <div className={`card card-project card-${project.status.toLowerCase()}`}>
        <div className="card-header border-0"></div>
        <div className="status-indicator">
          <div className={`status-indicator__dot status-${project.status.toLowerCase()}`}>
            <span className="status-text">{project.status}</span>
          </div>
        </div>
        <div className="card-body">
          <h5>{project.company}</h5>
          <p>{project.creationDate}</p>
        </div>
      </div>
    </NavLink>
  );
}

CardProject.propTypes = {
  project: PropTypes.object.isRequired
};

export default CardProject;
