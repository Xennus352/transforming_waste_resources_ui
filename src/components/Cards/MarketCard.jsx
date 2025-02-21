import { Minus, PackageCheck, Plus } from "lucide-react";
import React from "react";

const MarketCard = ({ post, onSubmit }) => {
  const [quantity, setQuantity] = React.useState(1);

  // control quality
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const reduceQuantity = () => {
    setQuantity(quantity - 1);
  };
  //end of control quality
  return (
    <div className="">
      <div className="card lg:card-side shadow-xl bg-base-100 ">
        <figure className="lg:w-1/3 xl:1/2 md:w-full sm:w-full">
          <img
            src={post.post_picture}
            className="object-cover"
            alt="post pic"
          />
        </figure>
        <div className="card-body lg:w-2/5 xl:w-2/5">
          <h2 className="card-title">{post.post_title}</h2>
          <div className="">
            <div>
              <p>{post.post_content} this is content of the products</p>
              <p className="badge badge-outline">{post.post_content} 2,500MMK</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            {/* for quality  */}
            <div className="flex items-center gap-4">
              <button
                className="btn btn-outline"
                disabled={quantity === 1}
                onClick={reduceQuantity}
              >
                <Minus size={25} />
              </button>
              <p>{quantity}</p>
              <button
                className="btn btn-outline"
                disabled={quantity === 50}
                onClick={addQuantity}
              >
                <Plus size={25} />
              </button>
            </div>
            <button className="btn btn-primary">
              <PackageCheck size={25} /> <p>Buy Now</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
