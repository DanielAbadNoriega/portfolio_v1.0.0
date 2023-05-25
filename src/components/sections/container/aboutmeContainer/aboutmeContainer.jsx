import React from 'react';
import perfilDan from '../../../../assets/imgs/sections/aboutme/perfil.png';
import perfilDan_2 from '../../../../assets/imgs/sections/aboutme/perfil_2.jpeg';
import pc from '../../../../assets/imgs/sections/aboutme/pc_coding_psd.jpg';
import learning from '../../../../assets/imgs/sections/aboutme/learning.jpg';
import teamwork from '../../../../assets/imgs/sections/aboutme/teamwork.jpg';
import { useNavigate } from 'react-router-dom';

const AboutmeContainer = () => {
  const navigate = useNavigate();

  return (
    <section id="aboutme-section" className="aboutme-container">
      <button className="btn-navigator" onClick={() => navigate('/')}>
        Init.
      </button>
      <div className="aboutme-container-title">
        <span>&lt;h2&gt;</span>
        <h2>About me</h2>
        <span>&lt;/h2&gt;</span>
      </div>
      <div className="aboutme-container-body">
        <article className="aboutme-profile">
          <p>
            <br />
            I'm Daniel Abad Noriega, a dedicated frontend web developer with a
            passion for crafting exceptional digital experiences. With a strong
            skill set and a commitment to continuous growth, I strive to deliver
            high-quality work that leaves a lasting impression.
            <br />
          </p>
          {/* <img src={perfilDan} alt="perfil-dan" /> */}
          <img src={perfilDan_2} alt="perfil-dan" />
        </article>

        <article>
          <img src={pc} alt="pc-coding" />
          <p>
            <br />
            My journey in web development began with a fascination for
            technology and its ability to transform the way we interact with the
            digital world. This curiosity led me to specialize in frontend
            development, where I have honed my skills and stayed up-to-date with
            the latest industry trends and practices.
            <br />
          </p>
        </article>

        <article>
          <p>
            <br />
            One of my key attributes is my unwavering commitment to excellence.
            I approach every project with meticulous attention to detail,
            ensuring clean, efficient, and well-structured code. By focusing on
            responsive design and intuitive user interfaces. Continual
            improvement is at the core of my work ethic. In the fast-paced world
            of web development, I recognize the importance of staying up-to-date
            with emerging technologies and best practices.
            <br />
          </p>
          <div>
            <img src={learning} alt="learning" />
          </div>
        </article>

        <article>
          <img src={teamwork} alt="teamwork" />
          <p>
            <br /> I possess strong collaboration and communication abilities. I
            thrive in both independent and team-oriented environments, valuing
            open dialogue and constructive feedback. I believe in the power of
            collaboration and teamwork. Working alongside talented individuals
            who challenge and inspire me allows me to push the boundaries of
            what is possible.
            <br />
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutmeContainer;
