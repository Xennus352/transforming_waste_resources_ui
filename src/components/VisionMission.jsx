import React from "react";
import { motion } from "motion/react";

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
        className="card bg-base-100 w-full mt-3 mb-3 p-1 shadow-xl"
      >
        <div className="card-body">
          <h2 className="card-title">Our Vision</h2>
          <p style={{ textIndent: "1.5em" }}>
            To create a sustainable future where waste is transformed into
            valuable resources, fostering a circular economy that benefits
            communities and the environment.
          </p>
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
          <h2 className="card-title"> Our Mission</h2>
          <p style={{ textIndent: "1.5em" }}>
            Our mission is to innovate and implement effective waste management
            solutions that convert waste into resources. We strive to educate
            and engage communities, advocate for sustainable practices, and
            collaborate with stakeholders to promote a cleaner, greener planet.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default VisionMission;
