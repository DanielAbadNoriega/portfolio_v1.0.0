import React from 'react';
import FooterContainer from '../footerContainer/footerContainer';
import AboutmeContainer from '../aboutmeContainer/aboutmeContainer';
import SkillsContainer from '../skillsContainer/skillsContainer';

const Home = () => {
  return (
    <>
      <AboutmeContainer></AboutmeContainer>
      <SkillsContainer></SkillsContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default Home;
