import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div class="col">
      <div
        className="card px-0 shadow bg-white rounded"
        style={{ width: "26rem" }}
      >
        <img
          src={props.imgsrc}
          className="card-img-top px-0 mx-0 img-fluid"
          alt="..."
          style={{ height: "15rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to={props.visit} className="btn-get-started-lite">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
