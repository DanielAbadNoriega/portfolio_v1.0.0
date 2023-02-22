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
      content: {
        Basics: "links, tables, Iframes, Responsive...",
        Forms: "Attributes, elements, input types and attibutes and input form Attributes.",
        Media: "Media, Video and Audio.",
        APIs: "Geolacation, Drag/Drop, Web Storage..."
      }
    },
    {
      name: "css",
      img: css,
      content: {
        
      }
    },
    {
      name: "js",
      img: js,
      content: {
        
      }
    },
    {
      name: "react",
      img: react,
      content: {
        
      }
    },
    {
      name: "git",
      img: git,
      content: {
        
      }
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
            <div key={index} className={`container-${skill.name}-skill`}>
              <SkillButton
                name={skill.name}
                img={skill.img}
              ></SkillButton>
              <SkillModal key={index} name={skill.name} content={skill.content}></SkillModal>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsContainer;
