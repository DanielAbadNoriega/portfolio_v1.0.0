import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { SKILLS, SKILLS_BACK, SKILLS_FRONT } from '../../../../data/data';
import SkillButton from '../../pure/skillsButton/skillButton';
import SkillModal from '../../pure/skillsModal/skillModal';
import { useNavigate } from 'react-router-dom';

const SkillsContainer = () => {
  const skills = SKILLS;

  const navigate = useNavigate();

  const randomKey = () => {
    return Math.floor(Math.random() * 999999);
  };

  return (
    <section id="skills-section">
      <button className="btn-navigator" onClick={() => navigate('/')}>
        <AiFillHome />
      </button>
      <div className="skill-section-title">
        <span>&lt;h2&gt;</span>
        <h2>Skills</h2>
        <span>&lt;/h2&gt;</span>
      </div>

      <div className="skills-container">
        {/* SKILLS LIST */}
        <article>
          <div className="skills-list">
            <div className="skills-list-front">
              <span>&lt;h3&gt;</span>
              <h3>Front skills</h3>
              <span>&lt;/h3&gt;</span>
              <ul>
                {SKILLS_FRONT.map((skill) => (
                  <li key={randomKey()}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skills-list-back">
              <span>&lt;h3&gt;</span>
              <h3>Backend skills</h3>
              <span>&lt;/h3&gt;</span>
              <ul>
                {SKILLS_BACK.map((skill) => (
                  <li key={randomKey()}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <p>
            <br />
            Look down my skills that i have until now and please <span>press each icon image</span> to see the full
            content about each one.
            <br />
          </p>
        </article>

        {/* SKILLS ICONS */}

        <div className="skills">
          {skills.map((skill, index) => {
            return (
              <div key={index} className={`container-${skill.name}-skill`}>
                <SkillButton name={skill.name} img={skill.img}></SkillButton>
                <SkillModal key={index} name={skill.name} content={skill.content}></SkillModal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsContainer;
