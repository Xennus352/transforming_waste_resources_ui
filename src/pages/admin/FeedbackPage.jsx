import React from "react";
import FeedbackTab from "../../components/admin_comp/FeedbackTab";
import { useGetFeedback } from "../../react-query/feedback";
import Divider from "../../components/Divider";

const FeedbackPage = () => {
  const { data: feedback } = useGetFeedback();

  return (
    <div>
      <div className="text-2xl flex items-center ">Dashboard</div>
      <Divider />
      <div>
        {feedback?.map((feedback, i) => {
          return (
            <div key={i}>
              <FeedbackTab feedback={feedback} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackPage;
