import React from 'react';
import Modal from 'react-modal';

const MiniWindow = ({ isOpen, onRequestClose }) => {
  const customStyles = {
    content: {
      width: '95%',
      top: '85px',
      padding: '0',
      border: 'none',
      height: '70vh',
      position: 'relative',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Mini Window"
      style={customStyles}
    >
      <h2>Mini Window Content</h2>
      <p>This is the content of the mini window.</p>
    </Modal>
  );
};

export default MiniWindow;