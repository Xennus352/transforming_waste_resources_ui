import { BookMarked, Heart, MessageSquareCode } from "lucide-react";
import React from "react";

const SingleCard = () => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"> <Heart size={28} /> </button>
            <button className="btn btn-primary"> <MessageSquareCode size={28} /> </button>
            <button className="btn btn-primary"> <BookMarked size={28} /> </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
