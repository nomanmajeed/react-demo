import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  {props.name}
                  <strong className="brand-name"> Webie360</strong>
                </h1>
                <h3 className="my-3">{props.desc}</h3>
                <div>
                  <NavLink
                    to={props.visit}
                    className="home-anchor mt-3 btn-get-started"
                  >
                    {props.btntext}
                  </NavLink>
                </div>
              </div>
              <div className="col-md-6 mt-5 pt-5 order-1 order-lg-2">
                <div className="">
                  <img
                    src={props.imgsrc}
                    className="image-fluid animated"
                    alt="Home Page Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
