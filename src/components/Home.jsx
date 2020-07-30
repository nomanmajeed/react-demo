import React from "react";
import web from "../images/svg/home.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        desc="It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout."
        btntext="Get Started"
        imgsrc={web}
        visit="/services"
      />
    </>
  );
};

export default Home;
