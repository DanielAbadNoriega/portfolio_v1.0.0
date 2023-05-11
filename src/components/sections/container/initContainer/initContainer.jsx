import React from 'react';
import { useNavigate } from "react-router-dom";
import HeaderContainer from '../headerContainer/headerContainer';


const InitContainer = () => {

  const navigate = useNavigate();

  return (
    <div className='initContainer'>
      <button onClick={() => navigate("/home")}>Home</button>
      <HeaderContainer></HeaderContainer>
    </div>
  );
}

export default InitContainer;
