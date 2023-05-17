import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo_250 from "../../../../assets/imgs/logo/Logo_250px.png";
import logo_500 from "../../../../assets/imgs/logo/Logo_500px.png";

const InitContainer = () => {
  const navigate = useNavigate();

  // TODO: tapAnyWhere

  return (
    <div className="initContainer">
      {/* TITLE */}
      <div className="wraper">
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
                <h1>CONTACT</h1>
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
                <h1>ABOUT</h1>
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
                  <span>DANIEL</span>
                </h1>
              </div>
              <div className="sides side-2" onClick={() => navigate("/skills")}>
                <h1>
                  <span>SKILLS</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* LOGO */}
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
  );
};

export default InitContainer;
