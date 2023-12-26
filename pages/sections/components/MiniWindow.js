import React, { useState } from 'react';
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
          <div className='modal-one'>
            <a href="#" className="visible-div">
              <span>WIRELINE SERVICES <ArrowForwardIosIcon className="modal-icon" /></span>
            </a>
            <a href="#" className="visible-div">
              <span>WELL TESTING SERVICES <ArrowForwardIosIcon className="modal-icon" /></span>
            </a>
            <a href="#" className="visible-div">
              <span>WELLHEAD SERVICES <ArrowForwardIosIcon className="modal-icon" /></span>
            </a>
            <a href="#" className="visible-div">
              <span>TECHNICAL SUPPORT <ArrowForwardIosIcon className="modal-icon" /></span>
            </a>
          </div>
            <div className="modal-two">
              <div className="hidden-div">
                <a href="#" className="link-with-hidden-div">
                  <span>Perforations <ArrowForwardIosIcon className="modal-icon" /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Pipe Recovery <ArrowForwardIosIcon className="modal-icon" /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Production Logging <ArrowForwardIosIcon className="modal-icon" /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Plug Setting Services <ArrowForwardIosIcon className="modal-icon" /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Magnetic Orienting Tool (MOT)<ArrowForwardIosIcon className="modal-icon" /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Cement Bond Log (CBL) <ArrowForwardIosIcon className="modal-icon" /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Caliper Services <ArrowForwardIosIcon className="modal-icon" /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Intelligent Perforations <ArrowForwardIosIcon className="modal-icon" /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Depth Correlation <ArrowForwardIosIcon className="modal-icon" /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>TCP Services <ArrowForwardIosIcon className="modal-icon" /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Pressure Control Services (PCE) <ArrowForwardIosIcon className="modal-icon" /></span>
                </a>
              </div>
            </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default MiniWindow;