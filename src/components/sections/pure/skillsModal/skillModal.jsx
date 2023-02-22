import React from "react";
import PropTypes from 'prop-types';
import SkillModalBody from "../skillsModalBody/skillModalBody";

const SkillModal = ({ name, content }) => {
  return (
    <div
      className="modal fade"
      id={`${name}-skill-modal`}
      tabIndex="-1"
      aria-labelledby={`${name}-skill-modalLabel`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
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
          <SkillModalBody content={content}></SkillModalBody>
          {/* FOOTER */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
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
