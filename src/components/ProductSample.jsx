import React, { useEffect, useState } from "react";
import { useGetProduct } from "../react-query/product";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCarousel = () => {
  const { data: products } = useGetProduct();
  const navigate = useNavigate();
  const limitedProducts = products ? products.slice(0, 6) : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (limitedProducts.length == 0) return; // Prevent running interval if no products

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % limitedProducts.length);
    }, 3000);
    setCurrentIndex(0); 
// Reset index when products update
    return () => clearInterval(interval);
  }, [limitedProducts.length]);

  useEffect(() => {
    setCurrentIndex(0); // Reset index when products update
  }, [limitedProducts.length]);

  if (!products || limitedProducts.length == 0) {
    return <p className="text-center text-gray-600">Loading products...</p>;
  }

  return (
    <div className="relative w-full">
      <div className="carousel h-80 overflow-hidden">
        <div
          className="carousel-body h-full flex gap-3 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {limitedProducts.map((product) => (
            <div
              key={product.id}
              className="carousel-slide flex justify-between gap-3 bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 mx-auto flex-shrink-0"
            >
              <img
                className="w-full h-auto object-cover rounded"
                src={product.image_url}
                alt={product.product_name}
              />
              <div
                className="py-4 text-center cursor-pointer"
                onClick={() => navigate("/app/market")}
              >
                <h3 className="text-lg font-semibold">
                  {product.product_name}
                </h3>
                <p className="text-gray-700 text-sm">
                  {product.description?.split(" ").slice(0, 10).join(" ")}...
                </p>
                <p className="text-gray-900 font-bold text-xl mt-2">
                  {product.price} MMK
                </p>
                <button
                  className="w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600 transition duration-200"
                  onClick={() => navigate("/app/market")}
                >
                  Buy Now...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow"
        onClick={() =>
          setCurrentIndex(
            (prevIndex) =>
              (prevIndex - 1 + limitedProducts.length) % limitedProducts.length
          )
        }
      >
        &#10094;
      </button>
      <button
        type="button"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow"
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % limitedProducts.length
          )
        }
      >
        &#10095;
      </button>
    </div>
  );
};

export default ProductCarousel;
