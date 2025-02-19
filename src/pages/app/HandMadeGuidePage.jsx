import React from "react";
import Divider from "../../components/Divider";
import { useGetBlog } from "../../react-query/admin/admin";
import HandmadeCard from "../../components/Cards/HandmadeCard";

const HandMadeGuidePage = () => {
  // get data
  const { data: handmadeBlog, isLoading, isError } = useGetBlog();

  return (
    <div>
      <div className="text-2xl flex items-center ">Handmade Samples</div>
      <Divider />
      {isError && (
        <p className="text-error text-2xl  flex items-center gap-4 justify-center">
          {" "}
          Failed to fetch data! <Unplug />
        </p>
      )}

      {isLoading && (
        <div className="flex flex-col items-center justify-center h-3/5 w-full">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      {handmadeBlog?.map((blog) => (
        <div key={blog.id}>
          <HandmadeCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default HandMadeGuidePage;
