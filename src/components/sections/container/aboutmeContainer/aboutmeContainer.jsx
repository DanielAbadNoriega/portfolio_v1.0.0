import React from 'react';
import perfilDan from "../../../../assets/imgs/sections/aboutme/perfil.png"

const AboutmeContainer = () => {
  return (
    <section id="aboutme-section" className='container'>
      <article>
        <h2>About me</h2>
        <p>loremipsum dolor</p>
      </article>
      <img src={perfilDan} alt='perfil-dan'/>
    </section>
  );
}

export default AboutmeContainer;
