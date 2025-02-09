import React from "react";
import Divider from "../../components/Divider";
import { modal } from "../../utils/modal";
import SingleCard from "../../components/Cards/SingleCard";
import { useGetBlog } from "../../react-query/admin/admin";

const AppFeed = () => {
  const { data: blog, isLoading } = useGetBlog();


  return (
    <div>
      <p className=" text-center text-xl ">Here is something</p>
      <div className="top-0 sticky z-40 m-2">
        <Divider title={"Content"} />
        <input
          className="input file-input input-primary outline-none hover:cursor-pointer w-full disabled opacity-40"
          placeholder="What's on your mind! Let's create now..."
          type="text"
          onClick={() => {
            modal("create-post-form");
          }}
        />
      </div>

      {/* cards  */}
      <div className="m-3 flex flex-col gap-4">
        {isLoading
          ? "Loading"
          : blog &&
            blog?.map((blog, index) => {
              return (
                <div key={index}>
                  {" "}
                  <SingleCard blog={blog} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default AppFeed;
