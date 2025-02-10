import React from "react";
import Divider from "../../components/Divider";
import { modal } from "../../utils/modal";
import SingleCard from "../../components/Cards/SingleCard";
import { useGetUserPost } from "../../react-query/user";

const AppFeed = () => {

  // get post 
  const { data: post, isLoading } = useGetUserPost();

  return (
    <div>
      <p className=" text-center text-xl ">Here is something</p>
      <div className="top-0 sticky z-40 m-2">
        <Divider title={"Content"} />
        <input
          className="input placeholder:text-black placeholder:font-semibold file-input input-primary outline-none hover:cursor-pointer w-full disabled opacity-60"
          placeholder="What's on your mind! Let's create now..."
          type="text"
          onClick={() => {
            modal("create-post-form");
          }}
        />
      </div>

      {/* cards  */}
      <div className="m-3 flex flex-col gap-4">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-3/5 w-full">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        {post &&
          post?.map((post, index) => {
            return (
              <div key={index}>
                {" "}
                <SingleCard post={post} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AppFeed;
