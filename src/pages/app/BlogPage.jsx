import React from "react";
import AddBlogForm from "../../components/app_comp/blog/AddBlogForm";

const BlogPage = () => {
  return (
    <div className="flex flex-col items-center  h-full">
      <div>Creating Post</div>
      <div className="m-3">
        {" "}
        <AddBlogForm />
      </div>
    </div>
  );
};

export default BlogPage;
