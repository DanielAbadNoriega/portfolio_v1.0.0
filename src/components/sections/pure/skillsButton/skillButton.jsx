import React from 'react';
import PropTypes from 'prop-types';

const SkillButton = ({name, img}) => {
  return (
    <button
          //id={`btn-${name}-skill`}
          className="btn-skill"
          data-bs-toggle="modal"
          data-bs-target={`#${name}-skill-modal`}
        >
          <img id={`${name}-skill`} src={img} alt={`${name}-skill`} />
        </button>
  );
}

SkillButton.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default SkillButton;