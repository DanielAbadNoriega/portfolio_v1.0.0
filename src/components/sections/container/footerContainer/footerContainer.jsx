import React from "react";
import git from "../../../../assets/imgs/iconos_rrss/icono_git.png";
import linkedin from "../../../../assets/imgs/iconos_rrss/icono_Linkedin.png";
import gmail from "../../../../assets/imgs/iconos_rrss/icono_gmail.png";

const FooterContainer = () => {
  return (
    <footer id="footer" className="footer-container">
      <h3>Contact me</h3>
      <div className="footer-rss">
        <img src={git} alt="github-DanielAbadNoriega" />
        <img src={linkedin} alt="github-DanielAbadNoriega" />
        <img src={gmail} alt="github-DanielAbadNoriega" />
      </div>
    </footer>
  );
};

export default FooterContainer;
