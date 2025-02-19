import React from "react";
import Carousel from "../components/Carousel";
import Feedback from "../components/Feedback";
import Divider from "../components/Divider";
import AboutCard from "../components/AboutCard";

const HomePage = () => {
  return (
    <>
      {/* carousel  */}
      <Carousel />

      {/* line effect  */}
      <Divider title="About" />
      {/* About   */}
      <AboutCard />

      {/* line effect  */}
      <Divider title="Customer Feedback" />
      {/* customer Feedback  */}
      <Feedback />
    </>
  );
};

export default HomePage;
