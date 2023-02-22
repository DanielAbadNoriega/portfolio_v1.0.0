import React from "react";
import git from "../../../../assets/imgs/iconos_rrss/icono_git.png";
import linkedin from "../../../../assets/imgs/iconos_rrss/icono_Linkedin.png";
import gmail from "../../../../assets/imgs/iconos_rrss/icono_gmail.png";

const FooterContainer = () => {
  return (
    <footer id="footer" className="footer-container">
      <h3>Contact me</h3>
      <div className="footer-rss">
        <a
          href="https://github.com/DanielAbadNoriega"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={git} alt="github-DanielAbadNoriega" />
        </a>

        <a
          href="https://www.linkedin.com/in/danielabadnoriega"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={linkedin} alt="linkedin-DanielAbadNoriega" />
        </a>

        <a href="mailto:daniel.abad.noriega@gmail.com" target="_top">
          <img src={gmail} alt="gmail-DanielAbadNoriega"/>
         <p>daniel.abad.noriega@gmail.com</p>
        </a>
      </div>
    </footer>
  );
};

export default FooterContainer;
