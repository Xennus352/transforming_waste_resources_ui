import { Minus, PackageCheck, Plus, TicketX } from "lucide-react";
import React from "react";
import { useCancleOrder, useOrderProduct } from "../../react-query/product";

const MarketCard = ({ post }) => {
  // product quality
  const [quantity, setQuantity] = React.useState(1);

  // order product
  const { mutate: order, isSuccess: orderDone } = useOrderProduct();

  // for cancle order
  const { mutate: cancelOrder, isSuccess: orderCanceled } = useCancleOrder();

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

  // for ordering the product
  const handleOrder = (productId, quantity, totalCost) => {
    const data = { product_id: productId, quantity, price: totalCost };
    order(data);
  };

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
                disabled={quantity == post.quantity}
                onClick={addQuantity}
              >
                <Plus size={25} />
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-4 justify-center">
              <button
                className={`btn btn-primary `}
                disabled={orderDone}
                onClick={() => {
                  handleOrder(post.id, quantity, totalCost);
                }}
              >
                <PackageCheck size={25} /> <p>Buy Now</p>
              </button>
              <button
                className={`btn btn-primary `}
                disabled={!orderDone || orderCanceled}
                onClick={() => {
                  cancelOrder(post.id);
                }}
              >
                <TicketX size={25} /> <p>Cancel Order</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
