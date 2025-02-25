import React from "react";
import recycleSign from "../../assets/recycle-sign.png";
import Divider from "../../components/Divider";
import { useCancleOrder, useGetOrder } from "../../react-query/product";

const ListOrder = () => {
  // get all users
  const { data: orders, isLoading } = useGetOrder();
  console.log(orders);

  //delete user
  const { mutate: deleteOrder } = useCancleOrder();

  return (
    <div>
      <div className="text-xl m-2">OrderLists</div>
      <Divider />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product ID</th>
              <th>Quantity</th>
              <th>Total price</th>
              <th>Order date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr className=" w-full text-center text-2xl">
                <td>Fetching Data!</td>
              </tr>
            )}
            {/* row  */}

            {orders &&
              orders.map((order, index) => {
                return (
                  <tr key={index} className="hover hover:cursor-pointer ">
                    <th>{index + 1}</th>
                    <td>{order.username}</td>
                    <td>{order.product_id}</td>
                    <td>{order.quantity}</td>
                    <td>{order.total_price}</td>
                    <td>{order.order_date}</td>
                    <td className="flex flex-col gap-2 items-center h-full  my-6">
                      {/* <button
                        className="btn btn-outline btn-primary disabled:bg-success disabled:cursor-not-allowed"
                        onClick={() => {}}
                      >
                        Update
                      </button> */}
                      <button
                        className="btn btn-outline btn-error "
                        onClick={() => {
                          deleteOrder(order.product_id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOrder;
