import React from 'react';
import Modal from 'react-modal';
import { Slide } from "react-awesome-reveal";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MiniWindow = ({ isOpen, onRequestClose }) => {
  const customStyles = {
    content: {
      width: '80%',
      top: '-6vh',
      padding: '0',
      border: 'none',
      height: '70vh',
      position: 'relative',
      background: 'none',
      margin: 'auto',
      left: '0'
    },
    overlay: {
      background: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Mini Window"
      style={customStyles}
    >
      <Slide direction="top">
        <div className="service-modal-div">
          <div className="modal-one">
            <a href="#">
              <span>WIRELINE SERVICES <ArrowForwardIosIcon /></span>
            </a>
            <a href="#">
              <span>WELL TESTING SERVICES <ArrowForwardIosIcon /></span>
            </a>
            <a href="#">
              <span>WELLHEAD SERVICES <ArrowForwardIosIcon /></span>
            </a>
            <a href="#">
              <span>TECHNICAL SUPPORT <ArrowForwardIosIcon /></span>
            </a>
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default MiniWindow;