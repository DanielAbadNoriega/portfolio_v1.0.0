import React from "react";
import logo_250 from "../../../../assets/imgs/logo/Logo_250px.png";
import logo_500 from "../../../../assets/imgs/logo/Logo_500px.png";

const HeaderContainer = () => {
  return (
    <header id="header-section" className="header-container">
      <h1>
        {" "}
        Hi,
        <br /> I'm Daniel,
        <br />
        <span>web developer</span>
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
    </header>
  );
};

export default HeaderContainer;
