import React from "react";
import "../Styling/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container" id="contact">
      <div className="footer">
        <div className="extras">
          <h1>Extras</h1>
          <ul>
            <li>Brands</li>
            <li>Gift Certificate</li>
            <li>Affiliate</li>
            <li>Specials</li>
            <li>Site Map</li>
          </ul>
        </div>
        <div className="information">
          <h1>Information</h1>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div className="contact">
          <h1>Contact Us</h1>
          <ul>
            <li>Facebook</li>
            <li>GMail</li>
            <li>Twitter</li>
            <li>Whatsapp</li>
          </ul>
        </div>
        <div className="address">
          <h1>Address</h1>
          <ul>
            <li>
              43 Dream House, Dreammy street, <br />
              7131 Dreamville, USA
            </li>
            <li>company@gmail.com 456-456-4512</li>
            <li>Dream City, USA</li>
          </ul>
        </div>
      </div>
      <h2>
        Copyright <i className="bx bx-copyright"> Fruity 2021</i>
      </h2>
    </div>
  );
};
export default Footer;
