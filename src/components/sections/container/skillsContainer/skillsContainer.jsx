import React from "react";
import { SKILLS, SKILLS_BACK, SKILLS_FRONT } from "../../../../data/data";
import SkillButton from "../../pure/skillsButton/skillButton";
import SkillModal from "../../pure/skillsModal/skillModal";

const SkillsContainer = () => {
  const skills = SKILLS;

  const randomKey = () => {
    return Math.floor(Math.random() * 999999);
  };

  return (
    <section id="skills-section">
      <div className="skill-section-title">
        <span>&lt;h2&gt;</span>
        <h2>Skills</h2>
        <span>&lt;/h2&gt;</span>
      </div>
      <div className="skills-container">
      {/* SKILLS LIST */}
        <article>
          <p>
            <br />
            Look down my skills that i have until now and please{" "}
            <span>press each icon image</span> to see the full content about
            each one.
            <br />
          </p>
          <div className="skills-list">
            <div className="skills-list-front">
              <span>&lt;h2&gt;</span>
              <h2>Front skills</h2>
              <span>&lt;/h2&gt;</span>
              <ul>
                {SKILLS_FRONT.map((skill) => (
                  <li key={randomKey()}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skills-list-back">
              <span>&lt;h2&gt;</span>
              <h2>Backend skills</h2>
              <span>&lt;/h2&gt;</span>
              <ul>
                {SKILLS_BACK.map((skill) => (
                  <li key={randomKey()}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
        {/* SKILLS ICONS */}
        <div className="skills">
          {skills.map((skill, index) => {
            return (
              <div key={index} className={`container-${skill.name}-skill`}>
                <SkillButton name={skill.name} img={skill.img}></SkillButton>
                <SkillModal
                  key={index}
                  name={skill.name}
                  content={skill.content}
                ></SkillModal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsContainer;
