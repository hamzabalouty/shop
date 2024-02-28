import React from "react";
import "./Explore.css";
import { FaArrowRight } from "react-icons/fa";
import { exploreData } from "../../data";

const Explore = () => {
  return (
    <div className="explore">
      <h2 className="explore-header">Start exploring.</h2>
      <div className="explore-cat">
        <ul>
          <li className="explore-item">Woman</li>
          <li className="explore-item-active">Man</li>
          <li className="explore-item">Kids</li>
          <li className="explore-item">Sports</li>
          <li className="explore-item">Beauty</li>
          <li className="explore-item">Jewelry</li>
        </ul>
      </div>
      <div className="explore-products">
        {exploreData.map((item) => (
          <div className="explore-box">
            <div className="explore-box-head">
              <img src={item.img1} alt="pro-img" />
              <p>{item.num} Products</p>
            </div>
            <h5 className="md-text">Manufacturar</h5>
            <div className="last-row">
              <div className="last-row-left">
                <h3>{item.title}</h3>
                <a>
                  See Collection{" "}
                  <span>
                    <FaArrowRight className="explore-icon" />
                  </span>
                </a>
              </div>
              <div className="last-row-right">
                <img src={item.img2} alt="explore-img" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
