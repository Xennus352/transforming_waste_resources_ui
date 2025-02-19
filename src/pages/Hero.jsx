import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/recycle-sign.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="bg-[url('/src/assets/sustainable-waste-management.jpg')] bg-cover bg-center">
      <motion.div
        className="w-full h-screen flex flex-col items-center justify-center gap-2 "
        initial={{ opacity: 0, x: -60 }}
        animate={{
          opacity: 1,
          x:0, // Move to x: 0, then to x: -20, and back to x: 0
          transition: {
            delay: 0.5,
            type: "spring",
            duration: 0.6, // Adjust duration for a longer animation
            bounce:0.7,
          },
        }}
      >
        <div className="backdrop-blur-md rounded-md flex flex-col ">
          <div className="flex items-center flex-col gap-1 p-5">
            <p className="text-4xl text-white">Transforming waste into </p>
            <div className="flex items-center gap-4">
              <p className="italic text-3xl text-primary">Resources</p>
              <span className="w-14 animate-spin transition-all duration-1000 ease-in-out">
                <img src={Logo} alt="Logo" />
              </span>
            </div>
          </div>
          <div>
            <div className="flex justify-end">
              <motion.button
              whileHover={{rotate:'3deg', scale:1.05}}
              className="btn text-white text-lg btn-outline">
                <Link to="/">Let's Get Start..</Link>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
