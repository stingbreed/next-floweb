import React from 'react';
import Modal from 'react-modal';
import { Zoom } from "react-awesome-reveal";
import LoginIcon from '@mui/icons-material/Login';

const Popup = ({ isOpen, onRequestClose }) => {
    const customStyles = {
        content: {
          width: '300px',
          height: 'fit-content',
          margin: 'auto',
          top: '0',
          padding: '0',
          border: 'none',
          background: 'none',
        },
      };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Popup Window"
      style={customStyles}
    >
     <Zoom>
      <div>
        <div className="popup-links">
            <a href="https://flosmart.azurewebsites.net/Account/Login" target="_blank" className="popup-btn"><LoginIcon className="login-icon modal-login" />O.M.S</a>
            <a href="#" className="popup-btn"><LoginIcon className="login-icon modal-login" />S.M.S</a>
        </div>
        <button onClick={onRequestClose} className="popup-close-btn">Close</button>
      </div>
      </Zoom>
    </Modal>
  );
};

export default Popup;