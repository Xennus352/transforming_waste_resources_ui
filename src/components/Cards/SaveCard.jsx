import { Trash2 } from "lucide-react";
import React from "react";
import { useDeleteUserSavePost } from "../../react-query/user";

const SaveCard = ({ post }) => {
  // delete action
  const { mutate: deleteSavePost } = useDeleteUserSavePost();

  return (
    <div className="">
      <div className="card lg:card-side shadow-xl bg-base-100 ">
        <figure className="lg:w-1/3 xl:1/2 md:w-full sm:w-full">
          <img src={post.picture} className="object-cover" alt="post pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.content}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                deleteSavePost(post.id);
              }}
            >
              {" "}
              <Trash2 size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveCard;
