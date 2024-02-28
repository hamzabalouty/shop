import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h3 className="footer-logo">A-Shop</h3>
          <p>Fashion is a language that expresses your personality</p>
          <div className="footer-search">
            <input type="email" placeholder="Enter email" />
          </div>
        </div>
        <div className="footer-box">
          <h3>Address</h3>
          <ul>
            <li>22 Awesome Road New York,USA</li>
            <li>+123456789</li>
            <li>hello@gmail.com</li>
          </ul>
        </div>
        <div className="footer-box">
          <h3>Useful Links</h3>
          <ul>
            <li>Shop Copuon</li>
            <li>About Us</li>
            <li>Carrer</li>
            <li>Supports</li>
          </ul>
        </div>
        <div className="footer-box">
          <h3>Categories</h3>
          <ul>
            <li>Clothes</li>
            <li>Electronics</li>
            <li>Furniture</li>
            <li>Shoes</li>
            <li>Others</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
