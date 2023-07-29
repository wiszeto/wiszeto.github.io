import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/Modal.css';

Modal.setAppElement('#root');

const IconWithModal = ({icon, modalText}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div>
      <img src={icon} alt="Icon" className="icon" onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal}>close</button>
        <div>{modalText}</div>
      </Modal>
    </div>
  );
}

export default IconWithModal;
