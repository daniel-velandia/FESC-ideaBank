// CardProject.js
import React from "react";
import PropTypes from "prop-types";
import "../css/style.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardProject({ imageSource, title, text, url }) {
  return (
    <Link to={url} className="Card--link">
      <Card className="Card--featured">
        <div className="d-flex align-items-center">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text ? text : "Lorem ipsum dolor sit amet consectetu"}
            </Card.Text>
          </Card.Body>
          <div className="image-container">
            <Card.Img
              className="custom-img"
              variant="bottom"
              src={imageSource}
            />
          </div>
        </div>
      </Card>
    </Link>
  );
}

CardProject.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string,
};

export default CardProject;
