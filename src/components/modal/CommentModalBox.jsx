import React from "react";

export const CommentModalBox = ({ title, id, children }) => {
  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box max-w-none sm:w-full xl:w-4/6 lg:w-4/6 h-full backdrop-blur-xl bg-opacity-10">
        
         <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm text-lg btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* Title  */}
          <h3 className="font-bold text-xl text-white m-2">{title}</h3>
         

          <div className=" h-full w-full">{children}</div>
        </div>
      </dialog>
    </div>
  );
};
