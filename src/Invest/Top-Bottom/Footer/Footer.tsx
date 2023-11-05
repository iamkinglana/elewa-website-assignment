import React from "react";
import "./Footer.css";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";

const Footer: React.FC = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="location">
            <h3>Headquarters</h3>
            <a href="https://www.google.com/maps/place/The+Promenade/@-1.2564152,36.8048433,17z/data=!3m1!4b1!4m6!3m5!1s0x182f171ef5b4adf7:0x6a631a5a40e1cfee!8m2!3d-1.2564152!4d36.8048433!16s%2Fg%2F11j7q78jh8?entry=ttu">
              The Promenade, 19 General <br />
              Mathenge Rd <br />
              Nairobi, Kenya
            </a>
          </div>
          <div className="contacts">
            <h3>Contacts</h3>
            <p> T +254 78 92 27 755 </p>
            <p>E info@elewa.ke</p>
          </div>
          <div className="navigation">
            <h3>Navigation</h3>
            <p>About us</p>
            <p>Social Impact</p>
            <p>Invest</p>
            <p>News</p>
            <p>Contact</p>
          </div>
          <div className="brands">
            <h3>Brands</h3>
            <a href="https://elewa.co.ke/home">Elewa</a>
            <a href="https://italanta.net/">Italanta</a>
            <a href="https://elewa.ke/venture-labs">Venture Labs</a>
          </div>
          <div className="privacy">
            <h3>Privacy</h3>
            <a href="https://www.google.com/policies/privacy/">
              Terms and conditions
            </a>
            <a href="https://www.google.com/policies/privacy/">
              Cookie preferences
            </a>
          </div>
        </div>
        <div className="footer-socials">
          <div className="logo">
            <h1>elewa group</h1>
          </div>
          <div className="socials">
            <a href="https://www.facebook.com/elewa.ke/">
              <span><BiLogoFacebook /></span>
            </a>
            <a href="https://www.instagram.com/elewa_education/">
              <span><BiLogoInstagram /></span>
            </a>
            <a href="https://www.linkedin.com/company/elewa/">
              <span><BiLogoLinkedin /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
