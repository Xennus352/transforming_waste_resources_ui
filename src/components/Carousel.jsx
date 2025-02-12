import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 4; // Total number of carousel items

  // Array of images for the carousel
  const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalItems]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Define the animation properties
const animationProps = {
  initial: { opacity: 0, x: -20 },
  animate: {
      opacity: 1,
      x: 0,
      transition: {
          delay: 0.2,
          type: "spring",
          duration: 0.3,
          bounce: 0.4,
      },
  },
};

  return (
    <motion.div
      className="relative"
      {...animationProps}
    >
      <div className="carousel w-full">
        {images.map((image, index) => (
          <div
          {...animationProps}
            key={index}
            className={`carousel-item w-full transition-opacity duration-500 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              position: currentIndex === index ? "relative" : "absolute",
            }}
          >
            <img
              src={image}
              className="w-full"
              alt={`Carousel Item ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`btn btn-xs ${
              currentIndex === index ? "btn-active" : ""
            }`}
            onClick={() => handleDotClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Carousel;

// import React, { useEffect, useState } from "react";
// import { motion } from "motion/react"; // Ensure you're importing from 'framer-motion'

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalItems = 4; // Total number of carousel items

//   // Array of images for the carousel
//   const images = [
//     "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
//     "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
//     "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
//     "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [totalItems]);

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   // Define the animation properties
//   const animationProps = {
//     initial: { opacity: 0, x: -20 },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: 0.2,
//         type: "spring",
//         duration: 0.3,
//         bounce: 0.4,
//       },
//     },
//   };

//   return (
//     <motion.div className="relative">
//       <div className="carousel w-full">
//         {images.map((image, index) => (
//           <motion.div
//             key={index}
//             {...(currentIndex === index
//               ? animationProps
//               : { initial: {}, animate: {} })}
//             className={`carousel-item w-full transition-opacity duration-500 ${
//               currentIndex === index ? "opacity-100" : "opacity-0"
//             }`}
//             style={{
//               position: currentIndex === index ? "relative" : "absolute",
//             }}
//           >
//             <img
//               src={image}
//               className="w-full"
//               alt={`Carousel Item ${index + 1}`}
//             />
//           </motion.div>
//         ))}
//       </div>
//       <div className="flex w-full justify-center gap-2 py-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`btn btn-xs ${
//               currentIndex === index ? "btn-active" : ""
//             }`}
//             onClick={() => handleDotClick(index)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Carousel;
