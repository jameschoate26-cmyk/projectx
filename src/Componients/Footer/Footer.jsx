import React from "react";
import { Footers } from "./Footer.js";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";
import images from "../../assets/image/spaceX.png";

const Footer = () => {
  return (
    <Footers>
      <div className="main">
        <div className="logo">
          <div>
            <img src={images} alt="images" />
          </div>
          <p>© 2026 SpaceX, All Rights Reserved.</p>
        </div>

        <ul>
          <li>+(1) 123 456 78</li>
          <li>contact@yoursite.com</li>
          <li>380 St Kilda Road, Sydeny VIC 3004, Australia</li>
        </ul>
        <ul>
          <li> About Us</li>
          <li>Our Team</li>
          <li>Our Services</li>
        </ul>
        <div className="icon">
          <p>Buy Property</p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <div>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaXTwitter />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
    </Footers>
  );
};

export default Footer;
