import React from "react";
import { motion } from "motion/react";

const AboutCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.5 + 0.6 + 0.7, // Delay the second animation by the duration of the first
          type: "spring",
          duration: 0.6,
          bounce: 0.7,
        },
      }}
    >
      <div className="card bg-base-100 w-full mt-3 mb-3 p-1 shadow-xl">
        <div className="card-body">
          <h2 className="card-title"> Transforming waste into resources</h2>
          <p style={{ textIndent: "1.5em" }}>
            Transforming waste into resources is a powerful solution that
            addresses environmental challenges while creating economic
            opportunities. Establishing a comprehensive approach that includes a
            marketplace for upcycled and recycled products, a blog to educate
            and inspire, and a guide for creating handmade items from waste
            empowers communities to turn trash into valuable resources. The
            marketplace enables individuals and businesses to buy and sell items
            made from recycled materials, fostering a circular economy. A blog
            can share success stories, DIY tutorials, and expert insights to
            raise awareness and promote sustainable practices. Additionally, a
            guide for crafting handmade items from waste can inspire creativity
            and encourage people to repurpose everyday materials into useful or
            decorative products. By combining these elements with robust
            planning, public engagement, and support for innovation, the
            initiative can drive positive environmental impact and unlock the
            economic potential of waste transformation.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCard;
