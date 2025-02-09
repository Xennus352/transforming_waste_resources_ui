import React from "react";

const BlogCard = ({ blog, lang }) => {
  return (
    <>
      <div>
        <div className="card lg:card-side w-full shadow-xl bg-base-100 ">
          <figure className="min-w-56">
            <img
              src={blog.waste_pic}
              className="h-full w-full object-cover"
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
            {/* <div className="card-actions justify-end">
              <button
                className="btn btn-primary "
            
              >
                {" "}
                <Languages />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
