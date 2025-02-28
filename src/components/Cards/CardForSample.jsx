import React from 'react';
import {useNavigate} from 'react-router-dom'
function CardForSample({ product }) {
const navigate = useNavigate()
  return (
    <div className="w-[350px] mx-auto ">
      <div className="dark:bg-white bg-gray-50 border dark:border-none  rounded-2xl">
        <div className="w-full h-56 relative">

          <img
            src={
              product.image_url
            }
            alt="shoes"
            width={1000}
            height={1000}
            className={`h-56 w-full rounded-2xl object-cover `}
          />
        </div>
        <article className="text-black space-y-2 p-2 pb-3">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl text-base-dark">
              {product.product_name}
            </h1>
            <span className="font-medium text-xl text-base-dark">${product.price}</span>
          </div>
          <p className="text-xs  text-black">
            {product.description}
          </p>

          <button className="w-full hover:text-white flex justify-center items-center gap-2 border-black border-2 text-black hover:bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#3e5068] to-[#0c1970] py-2  rounded-md"
          onClick={()=> navigate('app/market')}
          >
            Buy now..
          </button>
        </article>
      </div>
    </div>
  );
}
export default CardForSample;
