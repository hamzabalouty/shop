import React from "react";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-container">
        <div className="offers-content">
          <h3>Don't miss out on special offers</h3>
          <p>
            Register to receive news about the latest, savings combos, discount
            codes...
          </p>
          <div className="offer-steps">
            <div className="offer-step-one">
              <div className="offer-one-num">
                <h5>01</h5>
              </div>
              <p>Savings combos</p>
            </div>
            <div className="offer-step-two">
              <div className="offer-two-num">
                <h5>02</h5>
              </div>
              <p>Freeship</p>
            </div>
            <div className="offer-step-three">
              <div className="offer-three-num">
                <h5>03</h5>
              </div>
              <p>Premium magazines</p>
            </div>
          </div>
          <div className="offers-search">
            <input type="text" placeholder="Enter your email" />
          </div>
        </div>
        <div className="offers-image">
          <img
            src="https://3ashop.netlify.app/static/media/Choosing%20clothes-bro.de285a50e7494664ef43.png"
            alt="offers-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
