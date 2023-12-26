import React from 'react'
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Career() {
  return (
    <div className="career-container">
        <div className="career-body">
            <h1 className="career-header">Your Professional Journey</h1>
            <p className="career-para">
            We are dedicated to fostering your career growth,
            empowering you to cultivate and refine 
            your professional skills, hence enabling you to navigate the oil and gas industry 
            with confidence.
            </p>
            <Link href="/careers" className="career-btn">JOIN floSmart&nbsp;&nbsp;&nbsp;<ArrowForwardIcon /></Link>
        </div>
        <div className="career-img"></div>
    </div>
  )
}

export default Career