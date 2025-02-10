import { BookMarked, Heart, MessageSquareCode } from "lucide-react";
import React from "react";
import { useSaveUserPost } from "../../react-query/user";

const SingleCard = ({ post }) => {

    // save post 
    const {mutate: savePost} = useSaveUserPost()

  return (
    <div className="">
      <div className="card lg:card-side shadow-xl bg-base-100 ">
        <figure className="lg:w-1/3 xl:1/2 md:w-full sm:w-full">
          <img
            src={post.picture}
            
            className="object-cover"
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
            <button className="btn btn-primary" onClick={() => { savePost(post.id) }}>
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
