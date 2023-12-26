import React, { useState, useEffect } from 'react';
import Navbar from './sections/Navbar'
import About from './sections/About'
import Services from './sections/Services'
import News from './sections/News'
import Career from './sections/Career'
import Client from './sections/Client'
import Footer from './sections/Footer'
import Contact from './sections/Contact'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  '/images/oil.png',
  '/images/staff.jpg',
  '/images/career.jpg',
];

function Home() {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="home-div">
        <nav className="navbar-div">
          <Navbar />
        </nav>
        <div className="operations-carousel">
          <Slider {...slickSettings} className="carousel-item">
          {images.map((image, index) => (
            <div key={index}>
              <img alt="sample_file" src={image} className="top-slider-image" />
            </div>
          ))}
          </Slider>
        </div>
        <div className="about-div">
          <About />
        </div>
        <div className="service-div">
          <Services />
        </div>
        <div className="news-div">
          <News />
        </div>
        <div className="career-div">
          <Career />
        </div>
        <div className="client-div">
          <Client />
        </div>
        <div className="contact-div">
          <Contact/>
        </div>
        <div className="footer-div">
          <Footer />
        </div>
    </div>
  )
}

export default Home