import React from "react";
import Products from "../../Components/Products/Products";
import Steps from "../../Components/Steps/Steps";
import ImagePage from "../../Components/ImagePage/ImagePage";
import Explore from "../../Components/Explore/Explore";
import Offers from "../../Components/Offers/Offers";
import Team from "../../Components/Team/Team";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Products />
      <Steps />
      <ImagePage />
      <Explore />
      <Offers />
      <Team />
    </>
  );
};

export default Home;
