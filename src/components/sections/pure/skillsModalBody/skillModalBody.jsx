import React from "react";
import PropTypes from 'prop-types';

const SkillModalBody = ({ content }) => {

  return (
    <div className="modal-body">
      <ul>
        {Object.keys(content).map((key) => (
          <li>
            <strong>{key}:</strong> {content[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

SkillModalBody.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SkillModalBody;
