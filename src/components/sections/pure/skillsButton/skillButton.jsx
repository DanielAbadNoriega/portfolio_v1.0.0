import React from 'react';

const SkillButton = ({name, img}) => {
  return (
    <button
          id={`btn-${name}-skill`}
          className="btn-skill"
          data-bs-toggle="modal"
          data-bs-target={`#${name}-skill-modal`}
        >
          <img id={`${name}-skill`} src={img} alt={`${name}-skill`} />
        </button>
  );
}

export default SkillButton;
