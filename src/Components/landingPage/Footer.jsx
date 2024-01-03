import React from "react";
import Logo from "../../Assets/gostudy.jpg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-section-one'>
        <div className='footer-logo-container'>
          <img src={Logo} alt='' />
        </div>
        <div className='footer-icons'>
          <FaFacebookF />
          <FaInstagram />
          <BsYoutube />
          <BsTwitter />
          <SiLinkedin />
        </div>
      </div>
      <div className='footer-section-two'>
        <div className='footer-section-columns'>
          <h3>Course</h3>
          <span>Web Development</span>
          <span>Mobile Development</span>
          <span>Data Science</span>
          <span>Machine Learning</span>
          <span>UI/UX Design</span>
        </div>
        <div className='footer-section-columns'>
          <h3>Menu</h3>
          <span>Home</span>
          <span>About</span>
          <span>Product</span>
          <span>Testimonial</span>
        </div>
        <div className='footer-section-columns'>
          <h3 style={{ marginBottom: "1rem" }}>About Us</h3>
          <span>Contact Us</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
