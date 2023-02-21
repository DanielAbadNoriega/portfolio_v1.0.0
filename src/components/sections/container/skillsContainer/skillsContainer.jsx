import React from 'react';
import html from "../../../../assets/imgs/iconos_languages/html.png";
import css from "../../../../assets/imgs/iconos_languages/css.png";
import js from "../../../../assets/imgs/iconos_languages/js.png";
import react from "../../../../assets/imgs/iconos_languages/react.png";
import git from "../../../../assets/imgs/iconos_languages/git.png";

const SkillsContainer = () => {
  return (
    <section id='skills-section' className='skills-container'>
      <article>
        <span>&lt;h2&gt;</span>
        <h2>Skills</h2>
        <span>&lt;/h2&gt;</span>
        <p>
          <br/>Here my skills until now.<br/>
        </p>
      </article>
      <div className='skills'>
        <img src={html} alt='html-skill'/>
        <img src={css} alt='css-skill'/>
        <img src={js} alt='js-skill'/>
        <img src={react} alt='react-skill'/>
        <img src={git} alt='git-skill'/>
      </div>
    </section>
  );
}

export default SkillsContainer;
