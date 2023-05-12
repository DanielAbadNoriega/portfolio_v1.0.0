import React from "react";
import { useNavigate } from "react-router-dom";

import logo_250 from "../../../../assets/imgs/logo/Logo_250px.png";
import logo_500 from "../../../../assets/imgs/logo/Logo_500px.png";

const InitContainer = () => {
  const navigate = useNavigate();

  return (
    <div className="initContainer">
      <div id="init-section">
        <h1>
          {" "}
          <br />
          HI.
          <br /> I'M,
          <br />
          <span
            role="button"
            onClick={() => navigate("/home")}
            style={{ cursor: "pointer" }}
          >
            DANIEL
          </span>
          <br />
        </h1>

        <img
          src={logo_250}
          srcSet={`
            ${logo_250} 250w,
            ${logo_500} 500w
          `}
          sizes="(min-width: 1500px) 500px,
          (min-width: 800px) 400px,
          (max-width: 800px) 250px,
           400px"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default InitContainer;
