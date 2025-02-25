import { BookMarked, Heart, MessageSquareCode, UserCheck } from "lucide-react";
import React, { useState } from "react";
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

  //long text
  const [isExpanded, setIsExpanded] = useState("false");

  // toggle expand
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // save post
  const { mutate: savePost } = useSaveUserPost();

  //like post
  const { mutate: likePost } = useLikePost();

  // make useful
  const { mutate: usefulPost } = useMakeUsefulPost();

  // word split function
  const truncateDescription = (description, wordLimit) => {
    if (!description) return "";
    const words = description.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : description;
  };

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
              <p className="whitespace-pre-wrap">
                {isExpanded
                  ? truncateDescription(post.content, 100)
                  : post?.content}
                {post?.content.split(" ").length > 100 && (
                  <button
                    className="badge badge-outline m-2 hover:shadow-lg"
                    onClick={toggleExpand}
                  >
                    {isExpanded ? "Show More" : "Show Less"}
                  </button>
                )}
              </p>
            ) : (
              <p className="whitespace-pre-wrap">
                {post?.contentInBurmese
                  ? isExpanded
                    ? post.contentInBurmese
                    : truncateDescription(post.contentInBurmese, 50)
                  : "Not add in db"}
                {post.contentInBurmese &&
                  post?.contentInBurmese.split(" ").length > 50 && (
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

            <button
              className="btn btn-primary"
              onClick={() => {
                usefulPost(post.id);
              }}
            >
              <UserCheck size={25} />
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
