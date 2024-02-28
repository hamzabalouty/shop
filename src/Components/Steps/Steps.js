import React from "react";
import "./Steps.css";
import { stepsData } from "../../data";

const Steps = () => {
  return (
    <div className="steps">
      <div className="steps-container">
        {stepsData.map((item) => (
          <div key={item.id} className="steps-box">
            <div className="step-img-container">
              <img src={item.img} alt="step-img" />
            </div>
            <h4>{item.step}</h4>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
