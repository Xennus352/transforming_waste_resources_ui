import React from "react";
import FeedbackForm from "./FeedbackForm";
import OurInfo from "./OurInfo";

const Feedback = () => {
  return (
    <div>
      {/* container          */}
      <div className="flex justify-around gap-2 m-2 h-screen p-1 ">
        {/* left  */}
        <div className="hidden md:block lg:block xl:block">
          <div className="w-full flex items-center justify-center">
            <OurInfo />
          </div>
        </div>
        {/* right  */}
        <div className="w-full">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
