import React from "react";
import PropTypes from 'prop-types';
import SkillModalBody from "../skillsModalBody/skillModalBody";

const SkillModal = ({ name, content }) => {
  return (
    <div
      className="modal modal-sm modal-lg fade"
      id={`${name}-skill-modal`}
      tabIndex="-1"
      aria-labelledby={`${name}-skill-modalLabel`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content modal-container">
          {/* HEADER */}
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`${name}-skill-modalLabel`}>
              {name.toUpperCase()}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {/* BODDY */}
          {/* <div className="modal-body">...</div> */}
          <SkillModalBody key={name} content={content}></SkillModalBody>
          {/* FOOTER */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SkillModal.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
}

export default SkillModal;
