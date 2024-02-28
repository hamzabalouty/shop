import React from "react";
import "./Team.css";
import { FaStar } from "react-icons/fa";

const Team = () => {
  return (
    <div className="team">
      <h3>A-Shop</h3>
      <div className="team-container">
        <div className="team-box">
          <div className="team-box-img">
            <img
              src="https://3ashop.netlify.app/static/media/1%20(2).82bad982f5f16e20030f.jpg"
              alt="team-img"
            />
          </div>
          <div className="team-box-text">
            <h4>James</h4>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="team-box-star">
              <FaStar className="team-icon" />
              <FaStar className="team-icon" />
              <FaStar className="team-icon" />
              <FaStar className="team-icon" />
              <FaStar className="team-icon" />
            </div>
          </div>
        </div>
        <div className="team-box">
          <div className="team-box-img">
            <img
              src="https://3ashop.netlify.app/static/media/hero.c3fb046a12091e21bbd5.jpg"
              alt="team-img"
            />
          </div>
          <div className="team-box-text">
            <h4>Smith</h4>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="team-box-star">
              <FaStar className="team-icon" />
              <FaStar className="team-icon" />
              <FaStar className="team-icon" />
              <FaStar className="team-icon" />
              <FaStar className="team-icon" />
            </div>
          </div>
        </div>
        <div className="team-box">
          <div className="team-box-img">
            <img
              src="https://3ashop.netlify.app/static/media/testimonial-1.5cbbefffa3cb5bd40ac8.jpg"
              alt="team-img"
            />
          </div>
          <div className="team-box-text">
            <h4>Jessica</h4>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="team-box-star">
              <FaStar className="team-icon" />
              <FaStar className="team-icon" />
              <FaStar className="team-icon" />
              <FaStar className="team-icon" />
              <FaStar className="team-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
