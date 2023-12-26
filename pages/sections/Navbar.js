import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import MiniWindow from './components/MiniWindow';
import Popup from './components/Popup';
import Link from 'next/link';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [showExpandIcon, setShowExpandIcon] = useState(true);
  const [isMiniWindowOpen, setIsMiniWindowOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleExpandIcon = () => {
    setShowExpandIcon(!showExpandIcon);
  };

  const openMiniWindow = () => {
    setIsMiniWindowOpen(true);
  };

  const closeMiniWindow = () => {
    setIsMiniWindowOpen(false);
  };

  const handleClick = () => {
    toggleExpandIcon();
    openMiniWindow();
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className={`mini-nav ${scrolling ? 'scrolled' : ''}`}>
        <a href="/gallery">
          <span>Gallery</span>
        </a>
        <Link href="/about">
          <span>About</span>
        </Link>
        <Link href="/contact">
          <span>Contact</span>
        </Link>
      </div>
      <div className={`main-nav ${scrolling ? 'scrolled' : ''}`}>
        <div className="navbar-sections one">
          <img src="/images/logo.png" alt="Company Logo" className="logo-img" />
        </div>
        <div className={`navbar-sections two ${scrolling ? 'scrolled' : ''}`}>
          <Link href="/" title="Home">
            <HomeIcon/>
          </Link>
          <a href="#" onClick={handleClick}>
            <MiscellaneousServicesIcon />
            <span>Services</span>
            {showExpandIcon ? (
              <ExpandMoreIcon onClick={toggleExpandIcon} className="up-down"/>
            ) : (
              <ExpandLessIcon onClick={toggleExpandIcon} className="up-down"/>
            )}
          </a>
          <MiniWindow isOpen={isMiniWindowOpen} onRequestClose={closeMiniWindow} />
          <a href="/news">
            <NewspaperIcon />
            <span>News</span>
          </a>
          <a href="/careers">
            <InfoIcon />
            <span>Careers</span>
          </a>
          <a href="#">
            <RequestQuoteIcon />
            <span>Get Quote</span>
          </a>
         </div>
          <div className={`navbar-sections three ${scrolling ? 'scrolled' : ''}`}>
            <a className={`nav-login ${scrolling ? 'scrolled' : ''}`} title="Login" onClick={openPopup}>
              <LoginIcon className="login-icon" />
            </a>
            <Popup isOpen={isPopupOpen} onRequestClose={closePopup} />
            <a href="#" className={`nav-whistle ${scrolling ? 'scrolled' : ''}`}>Whistle Blowing</a>
          </div>
        </div>
      </div>
  );
}

export default Navbar;