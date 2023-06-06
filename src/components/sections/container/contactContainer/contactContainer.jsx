import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import git from '../../../../assets/imgs/iconos_rrss/icono_git.png';
import linkedin from '../../../../assets/imgs/iconos_rrss/icono_Linkedin.png';
import gmail from '../../../../assets/imgs/iconos_rrss/icono_gmail.png';
import { useNavigate } from 'react-router-dom';

const ContactContainer = () => {
  const navigate = useNavigate();

  //TODO: include googlemaps

  return (
    <footer id="footer">
      <button className="btn-navigator" onClick={() => navigate('/')}>
        <AiFillHome />
      </button>
      <h3>Contact me</h3>
      <div className="footer-container">
        <p>
          <br />I am excited about the prospect of joining dynamic teams and contributing to innovative projects. I look
          forward to showcasing my skills and discussing how I can bring value to your organization. <br />
          <br />
          I am particularly interested in the opportunity to work on a variety of projects at the forefront of
          innovation in the industry. I am a self-motivated and dedicated individual who always strives to deliver
          high-quality work. I am comfortable working independently or as part of a team, and I always ensure that I am
          aligned with the best practices and principles of software development.
          <br />
          <br />I am available for an interview at your convenience and would welcome the opportunity to discuss my
          qualifications further. Please do not hesitate to contact me if you have any questions or if there is any
          additional information that I can provide. Here it is my <span>github</span>, my <span>linkedin</span> profile
          and my <span>mail</span>.
          <br />
          <br />
          Thank you very much.
          <br />
        </p>

        <div className="footer-rss">
          <a href="https://github.com/DanielAbadNoriega" target="_blank" rel="noreferrer noopener">
            <img src={git} alt="github-DanielAbadNoriega" />
          </a>

          <a href="https://www.linkedin.com/in/danielabadnoriega" target="_blank" rel="noreferrer noopener">
            <img src={linkedin} alt="linkedin-DanielAbadNoriega" />
          </a>

          <a href="mailto:daniel.abad.noriega@gmail.com" target="_top">
            <img src={gmail} alt="gmail-DanielAbadNoriega" />
            <p>daniel.abad.noriega@gmail.com</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactContainer;
