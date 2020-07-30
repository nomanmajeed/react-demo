import React from "react";
import web from "../images/svg/services.svg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to"
        desc="IMC is a USA based non-profit NGO working worldwide helping nations in need."
        btntext="Contact Us"
        imgsrc={web}
        visit="/contact"
      />
    </>
  );
};

export default About;
