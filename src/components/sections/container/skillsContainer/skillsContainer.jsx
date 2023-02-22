import React from "react";
import { SKILLS } from "../../../../data/data";
import SkillButton from "../../pure/skillsButton/skillButton";
import SkillModal from "../../pure/skillsModal/skillModal";

const SkillsContainer = () => {
  const skills = SKILLS;

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
    </section>
  );
};

export default SkillsContainer;
