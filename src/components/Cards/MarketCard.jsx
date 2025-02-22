import { Minus, PackageCheck, Plus } from "lucide-react";
import React from "react";

const MarketCard = ({ post, onSubmit }) => {
  //TODO: Add a form to submit the quantity of the product
  // product quality
  const [quantity, setQuantity] = React.useState(1);
  console.log(post);
  // total cost
  let totalCost = post.price * quantity;
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
          <img src={post.image_url} className="object-cover" alt="post pic" />
        </figure>
        <div className="card-body lg:w-2/5 xl:w-2/5">
          <h2 className="card-title">{post.product_name}</h2>
          <div className="">
            <div>
              <p>{post.description} this is content of the products</p>
              <p className="badge badge-outline">{post.price} MMK</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            {/* for quality  */}
            <div className="flex items-center gap-4">
              {/* total amount */}
              <div>
                <p className="badge badge-primary p-3 h-12">
                  <span className="hidden sm:hidden md:block lg:block xl:block">
                    {" "}
                    Total Amount:
                  </span>{" "}
                  {totalCost} MMK
                </p>{" "}
              </div>

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
