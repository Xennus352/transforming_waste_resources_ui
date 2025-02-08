import React from "react";
import { useForm } from "react-hook-form";
import { feedbackPost } from "../apis/feedback/feedback_control";
import { Send } from "lucide-react";
import { useCreateFeedback } from "../react-query/feedback";

const FeedbackForm = () => {
  // handle form inputs using react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: createFeedback } = useCreateFeedback();

  // send data
  const onSubmit = (data) => createFeedback(data);
  return (
    <div>
      {/* greeting text */}
      <div className="p-2">
        <h2 className="text-center font-bold">Send Us A Message</h2>
        <p>
          We will be glad to assist you with any questions and encourage you to
          share your ideas and improvements with us.
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name  */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("username")}
            />
          </label>

          {/* Email  */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
            />
          </label>
          {/* Phone  */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("phone")}
            />
          </label>

          {/* Description  */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Description</span>
            </div>

            <textarea
              className="textarea textarea-bordered h-24"
              {...register("description")}
            ></textarea>
          </label>

          <button className="btn btn-outline m-1 w-full btn-primary">
            Submit <Send />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
