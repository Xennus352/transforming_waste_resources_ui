import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/recycle-sign.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="bg-[url('/home/xennus/Workspace/TransformingWasteIntoResources/client/src/assets/sustainable-waste-management.jpg')] bg-cover bg-center">
      <motion.div
        className="w-full h-screen flex flex-col items-center justify-center gap-2 "
        initial={{ opacity: 0, x: -60 }}
        animate={{
          opacity: 1,
          x: 0, 
          transition: {
            delay: 0.5,
            type: "spring",
            duration: 0.3, 
            bounce: 0.4,
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
              <div className="btn text-white btn-outline">
                <Link to="/">Let's Get Start..</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
