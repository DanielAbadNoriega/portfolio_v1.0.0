import React from "react";
import perfilDan from "../../../../assets/imgs/sections/aboutme/perfil.png";

const AboutmeContainer = () => {
  return (
    <section id="aboutme-section" className="aboutme-container">
      <article>
        <span>&lt;h2&gt;</span>
        <h2>About me</h2>
        <span>&lt;/h2&gt;</span>
        <p>
          <br/>I'm a Frontend Developer with experience in creating web and mobile
          applications using technologies such as HTML, CSS, SASS, JavaScript,
          and ReactJS. I'm passionate about creating intuitive and visually
          appealing user experiences through a combination of technical and
          creative skills. My web development experience has allowed me to
          collaborate with cross-functional teams to create effective solutions
          that meet client requirements and exceed their expectations. I'm
          always on the lookout for new technologies and tools to improve my
          skills and stay up-to-date in the world of web development. <br/>
        </p>
      </article>
      <img src={perfilDan} alt="perfil-dan" />
    </section>
  );
};

export default AboutmeContainer;