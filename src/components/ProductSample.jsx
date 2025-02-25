import React from "react";
import { useGetProduct } from "../react-query/product";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const ProductSample = () => {
  const { data: products } = useGetProduct();
  //   only show 4 products
  const limitedProducts = products ? products.slice(0, 4) : [];
  const navigate = useNavigate();

  // word split function
  const truncateDescription = (description, wordLimit) => {
    if (!description) return "";
    const words = description.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : description;
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.5, // Delay the second animation by the duration of the first
          type: "spring",
          duration: 0.6,
          bounce: 0.7,
        },
      }}
      className="overflow-x-auto"
    >
      <div className="flex space-x-4 min-w-max p-2">
        {limitedProducts?.map((product) => {
          return (
            <div
              className="lg:w-1/4 w-56 md:w-80 rounded overflow-x-hidden shadow-lg p-4"
              key={product.id}
            >
              <img
                className="w-full h-48 object-cover"
                src={product.image_url}
                alt={product.product_name}
              />
              <div className="py-4">
                <h3 className="text-lg font-semibold">
                  {product.product_name}
                </h3>
                <p className="text-gray-700 text-sm">
                  {truncateDescription(product.description, 20)}
                </p>
                <p className="text-gray-900 font-bold text-xl mt-2">
                  {product.price} MMK
                </p>
              </div>
              <button
                className="w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600 transition duration-200"
                onClick={() => {
                  navigate("/app/market");
                }}
              >
                Buy Now...
              </button>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProductSample;
