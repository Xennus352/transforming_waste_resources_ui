import React from "react";
import { motion } from "motion/react";

const OurInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{
        opacity: 1,
        x: 0, // Move to x: 0, then to x: -20, and back to x: 0
        transition: {
          delay: 0.5,
          type: "spring",
          duration: 0.6, // Adjust duration for a longer animation
          bounce: 0.7,
        },
      }}
    >
      <h2 className="font-bold text-xl">GetIn Touch With Us</h2>

      <div>
        <h2>Call Us Now</h2>
        <p className="underline">(+95)123456789</p>
      </div>

      {/* container */}
      <div className="flex items-center justify-center m-2 p-2 gap-3">
        {/* left  */}
        <div>
          <h1 className="text-xl font-bold">Address</h1>

          <p>Myanmar, Bago , Taungoo</p>
          <p>Basic Computer Education High Private School Taungoo</p>

          <h1 className="text-xl font-bold">Email Address</h1>
          <p className="underline">xennus.dev@gmail.com</p>
        </div>
      </div>
    </motion.div>
  );
};

export default OurInfo;
