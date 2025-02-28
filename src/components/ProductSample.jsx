import React from 'react';
import { useGetProduct } from '../react-query/product';
import CardForSample from './Cards/CardForSample';
function ProductSample() {
  const { data: products } = useGetProduct()
  return (
    <>
      <div className="w-full text-5xl py-8  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
        <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
          {
            products?.map((product) => {
              return (
                <li key={product.id}>
                  <a
                    href="app/market"
                    className="border bg-primary  text-primary-foreground text-2xl  sm:grid hidden place-content-center  p-2   rounded-md">
                    <CardForSample product={product} />
                  </a>
                </li>
              )
            })
          }


        </ul>
      </div>
    </>
  );
}
export default ProductSample;
