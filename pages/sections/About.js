import React from 'react'
import SpeedIcon from '@mui/icons-material/Speed';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

function About() {
  return (
    <div className="about-container">
        <p className="about-header">Why floSmart..?</p>
        <div className="about-top-div">
          <Fade>
            <div className="about-div-body">
              <div className="about-icon">
                <SpeedIcon className="icon-design" style={{ fontSize: '100px' }} />
              </div>
              <div className="inner-div">
                <h1 className="delivery-header">Service Delivery</h1>
                <p className="delivery-para">
                our company excels in delivering cutting-edge oil and gas solutions and services 
                that optimize operational efficiency and ensure regulatory compliance.
                </p>
              </div>
            </div>
            <div className="about-div-body">
              <div className="about-icon">
                <HealthAndSafetyIcon className="icon-design" style={{ fontSize: '100px' }} />
              </div>
              <div className="inner-div">
                <h1 className="delivery-header">Safety</h1>
                <p className="delivery-para">
                Our top priority is commitment to personal safety, while also 
                extending our focus to the safety of those around us and our surroundings.
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="about-bottom-div"></div>
        <Link href="/about" className="about-link">EXPLORE MORE&nbsp;&nbsp;&nbsp;<ArrowForwardIcon />
        </Link>
    </div>
  )
}

export default About