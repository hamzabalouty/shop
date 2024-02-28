import React from "react";
import "./ImagePage.css";

const ImagePage = () => {
  return (
    <div className="imagepage">
      <div className="imagepage-container">
        <div className="imagepage-content">
          <h4>A-shope</h4>
          <h2>Earn free money with Ciseco</h2>
          <p>With Ciseco you will get freeship & savings combo...</p>
          <div className="imagepage-btns">
            <button className="st-btn">Savings combo</button>
            <button className="nd-btn">Discover more</button>
          </div>
        </div>
        <div className="imagepage-image">
          <img
            src="https://3ashop.netlify.app/static/media/rightLargeImg.adecddb1afbe10ac3fbe.webp"
            alt="imagepage-img"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
