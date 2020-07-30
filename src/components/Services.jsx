import React from "react";
import Card from "./Card";
import Sdata from "../data/Sdata";

const Services = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-10 mx-auto">
            <div className="row">
              <h2 className="container mt-5 mb-5 text-center">Our Services</h2>
              <div className="container-fluid col-10">
                <div className="row row-cols-3 row-cols-md-3 row-cols-sm-1 g-4">
                  {Sdata.map((data, index) => {
                    return (
                      <Card
                        key={index}
                        imgsrc={data.imgsrc}
                        title={data.title}
                        visit="/contact"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
