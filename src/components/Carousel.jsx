// import React from "react";
// import c2 from "../assets/biogas5.jpg";

// const Carousel = () => {
//   return (
//     <div>
//       <div>
//         <div className="carousel w-full ">
//           <div id="item1" className="carousel-item w-full object-cover">
//             <img src={c2} className="w-full " />
//           </div>
//           <div id="item2" className="carousel-item w-full">
//             <img
//               src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
//               className="w-full"
//             />
//           </div>
//           <div id="item3" className="carousel-item w-full">
//             <img
//               src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
//               className="w-full"
//             />
//           </div>
//           <div id="item4" className="carousel-item w-full">
//             <img
//               src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
//               className="w-full"
//             />
//           </div>
//         </div>
//         <div className="flex w-full justify-center gap-2 py-2">
//           <a href="#item1" className="btn btn-xs">
//             1
//           </a>
//           <a href="#item2" className="btn btn-xs">
//             2
//           </a>
//           <a href="#item3" className="btn btn-xs">
//             3
//           </a>
//           <a href="#item4" className="btn btn-xs">
//             4
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// AUTO MOVE CAROUSEL

import React, { useEffect, useState } from "react";
import c2 from "../assets/biogas5.jpg";

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

  return (
    <div className="relative">
      <div className="carousel w-full">
        {images.map((image, index) => (
          <div
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
    </div>
  );
};

export default Carousel;
