import { BookMarked, Heart, MessageSquareCode } from "lucide-react";
import React from "react";

const SingleCard = ({ post }) => {

  return (
    <div className="">
      <div className="card lg:card-side shadow-xl bg-base-100 ">
        <figure className="min-w-56">
          <img
            src={post.picture}
            className="h-full w-full object-cover"
            alt="post pic"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.content}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              {" "}
              <Heart size={25} />{" "}
            </button>
            <button className="btn btn-primary">
              {" "}
              <MessageSquareCode size={25} />{" "}
            </button>
            <button className="btn btn-primary">
              {" "}
              <BookMarked size={25} />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
