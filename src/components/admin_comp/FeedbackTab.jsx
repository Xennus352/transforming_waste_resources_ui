import React from "react";
import { useFeedbackDelete } from "../../react-query/feedback";

const FeedbackTab = ({ feedback }) => {
  const { mutate: feedbackDelete } = useFeedbackDelete();

  return (
    <div>
      <div className="card bg-base-100 w-full shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl uppercase ">{feedback.name}</h2>
          <p className=" underline">{feedback.email}</p>
          <p className="  underline"> {feedback.phone}</p>
          <p>{feedback.description}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                feedbackDelete(feedback.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackTab;
