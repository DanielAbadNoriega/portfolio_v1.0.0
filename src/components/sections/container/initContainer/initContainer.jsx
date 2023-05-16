import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo_250 from "../../../../assets/imgs/logo/Logo_250px.png";
import logo_500 from "../../../../assets/imgs/logo/Logo_500px.png";

const InitContainer = () => {
  const navigate = useNavigate();

  const [isMobile, setisMobile] = useState(false);

  const tapAnyWhere = () => {
    setisMobile(!isMobile);
    setTimeout(() => {
      setisMobile(!isMobile);
    }, 10000);
  };

  return (
    <div className="initContainer" onClick={() => tapAnyWhere()}>
      <div className="wraper" onClick={() => tapAnyWhere()}>
        {/* CONTACT */}
        <div className="box">
          <div className="single-box">
            <div className="box-content">
              <div
                className="sides side-1"
                onClick={() => navigate("/contact")}
              >
                <h1>HI.</h1>
              </div>
              <div
                className="sides side-2"
                onClick={() => navigate("/contact")}
              >
                <h1>CONTACT.</h1>
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT */}
        <div className="box">
          <div className="single-box">
            <div className="box-content">
              <div className="sides side-1" onClick={() => navigate("/about")}>
                <h1>I'M</h1>
              </div>
              <div className="sides side-2" onClick={() => navigate("/about")}>
                <h1>ABOUT.</h1>
              </div>
            </div>
          </div>
        </div>
        {/* SKILLS */}
        <div className="box">
          <div className="single-box">
            <div className="box-content">
              <div className="sides side-1" onClick={() => navigate("/skills")}>
                <h1>
                  <span>DANIEL.</span>
                </h1>
              </div>
              <div className="sides side-2" onClick={() => navigate("/skills")}>
                <h1>
                  <span>SKILLS.</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        onClick={() => tapAnyWhere()}
      />

      {/* <div id="init-section">
        <h1>
          {" "}
          <br />
          <span
            role="button"
            onClick={() => navigate("/contact")}
            className="init-section-contact"
            style={{ cursor: "pointer" }}
          >
            HI.
          </span>
          <br />
          <span
            role="button"
            onClick={() => navigate("/about")}
            className="init-section-about"
            style={{ cursor: "pointer" }}
          >
            I'M,
          </span>
          <br />
          <span
            role="button"
            onClick={() => navigate("/skills")}
            className="init-section-skills"
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
      </div> */}
    </div>
  );
};

export default InitContainer;
