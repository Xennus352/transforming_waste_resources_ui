import React from "react";

const BlogCard = ({ blog, lang }) => {
  return (
    <>
      <div>
        <div className="card lg:card-side shadow-xl bg-base-100 ">
          <figure className="lg:w-1/3 xl:1/2 md:w-full sm:w-full">
            <img
              src={blog.waste_pic}
              className="object-cover"
              alt="Blog Information"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            {lang ? (
              <p>{blog.description_burmese}</p>
            ) : (
              <p>{blog.description}</p>
            )}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
