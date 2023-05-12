import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonNav = () => {

  const navigate = useNavigate();
  
  const goTo = (path) => {
    navigate(path);
  }

  return (
    <button onClick={goTo("init")}>
      Init
    </button>
  );
}

export default ButtonNav;
