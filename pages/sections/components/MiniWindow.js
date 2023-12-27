import React, { useState } from 'react';
import Modal from 'react-modal';
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MiniWindow = ({ isOpen, onRequestClose }) => {
  const [isDivVisible, setDivVisible] = useState(false);

  const toggleDiv = () => {
    setDivVisible(prevIsDivVisible => !prevIsDivVisible);
  };

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
      <Slide direction="down">
        <div className="service-modal-div">
          <div className='modal-one'>
            <a href="#" className="visible-div" onClick={toggleDiv}>
              <span>WIRELINE <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
            </a>
            <a href="#" className="visible-div">
              <span>WELL TESTING <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
            </a>
            <a href="#" className="visible-div">
              <span>WELLHEAD <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
            </a>
            <a href="#" className="visible-div">
              <span>TECHNICAL SUPPORT <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
            </a>
          </div>
            <div className="modal-two">
            <Fade>
             {isDivVisible ? (
              <div className="hidden-div">
                <a href="#" className="link-with-hidden-div">
                  <span>Perforations <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Pipe Recovery <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Production Logging <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Plug Setting Services <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Magnetic Orienting Tool (MOT)<ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Cement Bond Log (CBL) <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Caliper Services <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Intelligent Perforations <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Depth Correlation <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>TCP Services <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
                </a>
                <a href="#" className="link-with-hidden-div">
                  <span>Pressure Control Services (PCE) <ArrowForwardIosIcon  style={{ fontSize: '14px' }} /></span>
                </a>
              </div>
             ) : null}
             </Fade>
            </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default MiniWindow;