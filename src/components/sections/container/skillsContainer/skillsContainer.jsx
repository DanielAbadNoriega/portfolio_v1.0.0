import React from "react";
import html from "../../../../assets/imgs/iconos_languages/html.png";
import css from "../../../../assets/imgs/iconos_languages/css.png";
import js from "../../../../assets/imgs/iconos_languages/js.png";
import react from "../../../../assets/imgs/iconos_languages/react.png";
import git from "../../../../assets/imgs/iconos_languages/git.png";
import SkillButton from "../../pure/skillsButton/skillButton";
import SkillModal from "../../pure/skillsModal/skillModal";

const SkillsContainer = () => {
  const skills = [
    {
      name: "html",
      img: html,
    },
    {
      name: "css",
      img: css,
    },
    {
      name: "js",
      img: js,
    },
    {
      name: "react",
      img: react,
    },
    {
      name: "git",
      img: git,
    },
  ];

  return (
    <section id="skills-section" className="skills-container">
      <article>
        <span>&lt;h2&gt;</span>
        <h2>Skills</h2>
        <span>&lt;/h2&gt;</span>
        <p>
          <br />
          Here my skills until now.
          <br />
        </p>
      </article>
      <div className="skills">
        {skills.map((skill, index) => {
          return (
            <>
              <SkillButton
                key={index}
                name={skill.name}
                img={skill.img}
              ></SkillButton>
              <SkillModal key={index} name={skill.name}></SkillModal>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsContainer;
