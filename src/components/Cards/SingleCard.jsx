import { BookMarked, Heart, MessageSquareCode } from "lucide-react";
import React from "react";

const SingleCard = ({ blog }) => {
  return (
    <div className="">
      <div className="card lg:card-side shadow-xl bg-base-100 ">
        <figure className="min-w-56">
          <img
            src={blog.waste_pic}
            className="h-full w-full object-cover"
            alt="Blog Information"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p>{blog.description}</p>
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
