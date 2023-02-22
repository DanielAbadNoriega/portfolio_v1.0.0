import React from 'react';
import AboutmeContainer from './aboutmeContainer/aboutmeContainer';
import SkillsContainer from './skillsContainer/skillsContainer';
//import WorkContainer from './workContainer/workContainer';

const SectionsContainer = () => {
  return (
    <div>
      <AboutmeContainer></AboutmeContainer>
      <SkillsContainer></SkillsContainer>
{/*       <WorkContainer></WorkContainer> */}
    </div>
  );
}

export default SectionsContainer;
