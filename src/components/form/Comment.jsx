import React from "react";
import { useCommentPost, useGetComment } from "../../react-query/user";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useComment } from "../../context/CommentContext";

const Comment = () => {

  const session = localStorage.getItem("session_token")

  // post id via context
  const { currentPostId } = useComment();

  // handle form inputs using react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // get comment
  const { data: comments, isError: getCommentError } = useGetComment();

  // comment post
  const { mutate: comment, isError, isPending } = useCommentPost();

  const onSubmit = (data) => {
    data.id = currentPostId;
    comment(data);
  };

  if (getCommentError) {
    toast.error("Please check your network!")
  }

  if (isError) {
    toast.error("OOPs something went wrong!");
  }
  return (
    <>
      <div className="flex flex-col items-center  justify-around h-5/6 w-full">
        {/* for show result  */}
        <div className="flex items-start w-full h-full p-2">
          <div className="flex h-full w-full flex-col justify-start gap-2 overflow-hidden overflow-y-scroll">
            {/* bubble  */}
            { session && comments?.map((c, i) => {
              // Check if the comment exists and matches the current post ID
              if (c && currentPostId === c.post_id && c.comment) {
                console.log(c)
                return (
                  <div key={i} className=" ">
                    {console.log(c)}
                    <div className=" ml-10 chat chat-start">
                      <div className="chat-bubble chat-bubble-primary">
                        <div className="badge badge-ghost m-1">{c.user_name}</div>
                        <div>{c.comment}</div>
                      </div>
                    </div>

                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          src={c.pic && "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                          alt={c.user_name}
                        />
                      </div>
                    </div>
                  </div>
                );
              }
              // Return null if the comment is not valid
              return null;
            })}
          </div>
        </div>
        {/* for input  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex items-center gap-3 mt-2">
            <input type="hidden" {...register("id")} />
            <input
              type="text"
              placeholder="comment"
              className="input input-info w-full"
              {...register("comment", { required: true })}
            />
            <button disabled={isPending} className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Comment;
