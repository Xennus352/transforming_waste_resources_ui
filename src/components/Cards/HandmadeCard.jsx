import React, { useState } from "react";

const HandmadeCard = ({ blog, lang }) => {
  //long text
  const [isExpanded, setIsExpanded] = useState("false");

  // toggle expand
  const toggleExpand = () => setIsExpanded(!isExpanded);
  // word split function
  const truncateDescription = (description, wordLimit) => {
    if (!description) return "";
    const words = description.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : description;
  };
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
              <p className=" whitespace-pre-wrap">
                {isExpanded
                  ? truncateDescription(blog.description, 100)
                  : blog.description}
                {blog.description.split(" ").length > 100 && (
                  <button
                    className="badge badge-outline m-2 hover:shadow-lg"
                    onClick={toggleExpand}
                  >
                    {isExpanded ? "Show More" : "Show Less"}
                  </button>
                )}
              </p>
            ) : (
              <p className=" whitespace-pre-wrap">
                {blog.description_burmese
                  ? isExpanded
                    ? truncateDescription(blog.description_burmese, 50)
                    : blog.description_burmese
                  : "Not add in db"}
                {blog.description_burmese &&
                  blog.description_burmese.split(" ").length > 50 && (
                    <button
                      className="badge badge-outline m-2 hover:shadow-lg"
                      onClick={toggleExpand}
                    >
                      {isExpanded ? "Show More" : "Show Less"}
                    </button>
                  )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandmadeCard;
