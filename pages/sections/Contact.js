import React from 'react';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  '/images/addax.jpg',
  '/images/agip.jpg',
  '/images/baker-hughes.jpg',
  '/images/corelab.jpg',
  '/images/elcrest.jpg',
  '/images/schlumberger.jpg',
  '/images/halliburton.jpg',
  '/images/npdc.jpg',
  '/images/oando.jpg',
  '/images/shell.jpg',
  '/images/seplat.jpg',
];

function Contact() {
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
    autoplaySpeed: 3000,
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
    <div className="contact-container">
      <div className="getin-touch">
        <h1 className="contact-header">Reach out to us</h1>
        <p className="contact-para">Would you like to talk to us about our services?<br></br> We will be glad to hear from you.</p>
        <Link href="/contact" className="contact-btn">Get in touch&nbsp;&nbsp;&nbsp;<ArrowForwardIcon /></Link>
      </div>
      <div className="carousel-container">
          <div className="slick-header">
            <h2>TRUSTED BY</h2>
          </div>
        <Slider {...slickSettings} className="slick-div">
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img alt="sample_file" src={image} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Contact;