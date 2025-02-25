import React from "react";

export const ModalBox = ({ title, id, children }) => {
  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box max-w-none w-full backdrop-blur-md bg-opacity-10">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* Title  */}
          <h3 className="font-bold text-xl text-white m-2">{title}</h3>

          <div className="">{children}</div>
        </div>
      </dialog>
    </div>
  );
};
