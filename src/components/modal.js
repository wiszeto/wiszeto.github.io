import React, { useState } from 'react';
import "../css/modal.css";

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="open-button" onClick={handleOpen}>
        {props.buttonText}
      </button>
      {isOpen && (
        <div className="modal-background">
          <div className="modal-content">
            <img src={props.imageSrc} alt={props.imageAlt} className="modal-image" />
            <p className="modal-description">{props.description}</p>
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
