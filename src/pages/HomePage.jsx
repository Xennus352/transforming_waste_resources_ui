import React from "react";
import Carousel from "../components/Carousel";
import Feedback from "../components/Feedback";
import Divider from "../components/Divider";
import AboutCard from "../components/AboutCard";
import ProductSample from "../components/ProductSample";
import { motion } from "motion/react";

const HomePage = () => {
  return (
    <>
      {/* carousel  */}
      <Carousel />

      {/* ProductSample */}
      <Divider title="Product Sample" />
      <ProductSample />

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
