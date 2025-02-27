import React from "react";
import { motion } from "motion/react";
import trash from '../assets/carousel/2.png'

const AboutCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay:  0.6 , // Delay the second animation by the duration of the first
          type: "spring",
          duration: 0.6,
          bounce: 0.7,
        },
      }}
    >
      <div className="">
          <h2 className=" text-center text-3xl font-bold m-2"> Transforming waste into resources</h2>
        <div className="flex items-center justify-around border-b-2 border-primary flex-row-reverse p-2 rounded-lg m-2">
          <div>
            <img src={trash} alt="picture" />
          </div>
          <p className=" indent-9 text-justify whitespace-break-spaces  w-2/3">
            Transforming waste into resources is a powerful solution that
            addresses environmental challenges while creating economic
            opportunities. 
            Establishing a comprehensive approach that includes a
            marketplace for upcycled and recycled products, a blog to educate
            and inspire, and a guide for creating handmade items from waste
            empowers communities to turn trash into valuable resources. 
            The marketplace enables individuals and businesses to buy and sell items
            made from recycled materials, fostering a circular economy. 
            A blog can share success stories, DIY tutorials, and expert insights to
            raise awareness and promote sustainable practices.
             Additionally, a guide for crafting handmade items from waste can inspire creativity
            and encourage people to repurpose everyday materials into useful or
            decorative products. 
            By combining these elements with robust
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
