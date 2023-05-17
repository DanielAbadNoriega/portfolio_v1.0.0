import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

import logo_250 from "../../../../assets/imgs/logo/Logo_250px.png";
import logo_500 from "../../../../assets/imgs/logo/Logo_500px.png";

const InitContainer = () => {
  const [boxMove, setBoxMove] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const originPos = () => {
      setCounter(1);
      console.log("[ tapAnyWhere - TIMEOUT ] Entro.");
      setTimeout(() => {
        setIsMoved(false);
        setCounter(0);
        console.log("[ tapAnyWhere - TIMEOUT ] Box move: ", boxMove);
      }, 10000);
    };

    console.log("[ tapAnyWhere - UseEffect ] box move: ", boxMove);
    console.log("[ tapAnyWhere - UseEffect ] box moved: ", isMoved);
    return () => {
      if (isMoved && counter === 0) originPos();
    };
  }, [boxMove, isMoved, counter]);

  const navigate = useNavigate();

  // TODO: tapAnyWhere

  const tapAnyWhere = () => {
    setBoxMove(!boxMove);
    setIsMoved(true);
  };

  const boxMoveStyle = {
    transform: "translateZ(-150px) rotateX(90deg)",
  };

  return (
    <div className="initContainer" onClick={() => tapAnyWhere()}>
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

      {/* TITLE */}
      <div className="wraper">
        {/* CONTACT */}
        <div className="box">
          <div className="single-box">
            <div
              className="box-content"
              style={boxMove && isMoved ? boxMoveStyle : {}}
            >
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
            <div
              className="box-content"
              style={boxMove && isMoved ? boxMoveStyle : {}}
            >
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
            <div
              className="box-content"
              style={boxMove && isMoved ? boxMoveStyle : {}}
            >
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

      {/* INFO */}
      <div className="tap-anywhere">
        <IoIosArrowUp className="arrow" />
        <p>
          TAP <span>ANYWHERE</span> OR <span>MOUSEOVER</span>
        </p>
      </div>
    </div>
  );
};

export default InitContainer;
