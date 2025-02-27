import React from "react";
import { motion } from "motion/react";
import vision from "../assets/carousel/1.png";

const VisionMission = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.5,
            type: "spring",
            duration: 0.6,
            bounce: 0.7,
          },
        }}
        className="card bg-base-100 w-full mx-auto mt-3 mb-3 p-1 shadow-xl"
      >
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Our Vision</h2>
          <div className="flex flex-row justify-between">
            <div className="p-2 ">
              <img src={vision} alt="" className="w-40 h-44 object-cover" />
            </div>
            <p style={{ textIndent: "1.5em" }}>
              We aim to create a special place where we empower communities,
              raise public awareness, and give trash or second-hand objects a
              new purpose.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.5 + 0.6, // Delay the second animation by the duration of the first
            type: "spring",
            duration: 0.6,
            bounce: 0.7,
          },
        }}
        className="card bg-base-100 w-full mt-3 mb-3 p-1 shadow-xl"
      >
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center"> Our Mission</h2>
          <div>
            <p style={{ textIndent: "1.5em" }}>
              Our mission is to innovate and implement effective waste
              management solutions that convert waste into resources. We strive
              to educate and engage communities, advocate for sustainable
              practices, and collaborate with stakeholders to promote a cleaner,
              greener planet.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VisionMission;
