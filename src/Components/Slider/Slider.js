import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <section className="Home-1 mb-5">
      <div id="carouselExampleCaptions" className="carousel slide home-caru">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://sixincorp.com/wp-content/uploads/2022/10/Lets-get-started-with-SIX.png"
              className="d-block wow slideInRight"
              data-wow-duration="2s"
              alt="..."
            />
            <div
              className="carousel-caption wow slideInLeft"
              data-wow-duration="2s"
            >
              <p className="mb-4 text-dark">
                🔥 In this season, find the best{" "}
              </p>
              <h2 className="mb-4 text-dark">
                Exclusive collection for
                <br /> everyone
              </h2>
              <button className="btn btn-dark p-3">
                Explore Now <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://townteam.com/cdn/shop/files/TSH22SCOT20375TM1-OceanBlue.jpg?v=1698309127"
              className="d-block wow slideIn wow slideInRight"
              data-wow-duration="2s"
              alt="..."
            />
            <div
              className="carousel-caption wow slideInLeft"
              data-wow-duration="2s"
            >
              <p className="mb-4 text-dark">
                🔥 In this season, find the best{" "}
              </p>
              <h2 className="mb-4 text-dark">
                Exclusive collection for
                <br /> everyone
              </h2>
              <button className="btn btn-dark p-3">
                Explore Now <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://townteam.com/cdn/shop/products/DSC_6101.jpg?v=1690456182"
              className="d-block wow slideInRight"
              data-wow-duration="2s"
              alt="..."
            />
            <div
              className="carousel-caption wow slideInLeft"
              data-wow-duration="2s"
            >
              <p className="mb-4 text-dark">
                🔥 In this season, find the best{" "}
              </p>
              <h2 className="mb-4 text-dark">
                Exclusive collection for
                <br /> everyone
              </h2>
              <button className="btn btn-dark p-3">
                Explore Now <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev carus-but-1"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next carus-but-2 "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Slider;
