import { BookMarked, Heart, MessageSquareCode, UserCheck } from "lucide-react";
import React from "react";
import {
  useGetLike,
  useLikePost,
  useMakeUsefulPost,
  useSaveUserPost,
} from "../../react-query/user";
import { modal } from "../../utils/modal";
import { useComment } from "../../context/CommentContext";


const SingleCard = ({ post, lang, totalLikes }) => {
  // context for comment
  const { setCurrentPostId } = useComment();

  // save post
  const { mutate: savePost } = useSaveUserPost();

  //like post
  const { mutate: likePost } = useLikePost();
    // make useful 
    const { mutate: usefulPost } = useMakeUsefulPost();

  return (
    <div className="">
      <div className="card lg:card-side shadow-xl bg-base-100 ">
        <figure className="lg:w-1/3 xl:1/2 md:w-full sm:w-full">
          <img src={post.picture} className="object-cover" alt="post pic" />
        </figure>
        <div className="card-body lg:w-2/5 xl:w-2/5">
          <h2 className="card-title">{post.title}</h2>
          <div className="">
            {lang ? (
              <p>{post.content}</p>
            ) : (
              <p>
                {post.contentInBurmese
                  ? post.contentInBurmese
                  : "Not add in db"}
              </p>
            )}
          </div>

          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                likePost(post.id);
              }}
            >
              {" "}
              <Heart size={25} /> <p>{totalLikes}</p>
            </button>

              <button  className="btn btn-primary"
              onClick={() => {
                usefulPost(post.id);
              }}>
              <UserCheck size={25}  />
              </button>

            <button
              className="btn btn-primary"
              onClick={() => {
                modal("comment");
                setCurrentPostId(post.id);
              }}
            >
              {" "}
              <MessageSquareCode size={25} />{" "}
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                savePost(post.id);
              }}
            >
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
