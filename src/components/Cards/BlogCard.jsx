import { Heart } from "lucide-react";
import React from "react";

const BlogCard = ({ post }) => {
  const lang = localStorage.getItem("Language");
  return (
    <div className="">
      <div className="card lg:card-side shadow-xl bg-base-100 ">
        <figure className="lg:w-1/3 xl:1/2 md:w-full sm:w-full">
          <img
            src={post.post_picture}
            className="object-cover"
            alt="post pic"
          />
        </figure>
        <div className="card-body lg:w-2/5 xl:w-2/5">
          <h2 className="card-title">{post.post_title}</h2>
          <div className="">
            <div>
              {" "}
              {lang != "myanmar" ? (
                <p>{post.post_content}</p>
              ) : (
                <p>
                  {post.post_contentInBurmese
                    ? post.post_contentInBurmese
                    : "Not add in db"}
                </p>
              )}
            </div>
          </div>
          <div className="badge badge-outline p-5 flex gap-4">
            <Heart size={25} /> <p>{post.total_like_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
