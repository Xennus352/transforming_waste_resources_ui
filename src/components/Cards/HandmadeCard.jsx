import React from "react";

const HandmadeCard = ({ blog }) => {
  const lang = localStorage.getItem("Language");

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl m-2">
        <figure className="lg:w-1/3 xl:1/2 md:w-full sm:w-full">
          <img src={blog.waste_pic} className="object-cover" alt="blog pic" />
        </figure>
        <div className="card-body lg:w-2/5 xl:w-2/5">
          <h2 className="card-title">{blog.title}</h2>
          <div className="">
            {lang ? (
              <p>{blog.description}</p>
            ) : (
              <p>
                {blog.description_burmese
                  ? blog.description_burmese
                  : "Not add in db"}
              </p>
            )}
          </div>
          <div className="card-actions justify-end">
            <button disabled className="btn btn-primary">Nothing to do</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandmadeCard;
