import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

function Services() {  
  return (
    <div className="services-container">
        <div className="services-carousel">
          <div className="services-img"></div>
          <div className="services-writeup">
            <h1 className="service-header">floSmart Services</h1>
            <p className="service-para">
            We provide a range of oil and gas services that are tailored to the needs 
            of different clients. Our employees are experienced and knowledgeable, 
            which allows them to work quickly, efficiently, and cost effectively.
            </p>
            <Link href="#" className="service-btn">SERVICES & SOLUTIONS&nbsp;&nbsp;&nbsp;
              <ArrowForwardIcon />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Services