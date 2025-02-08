import React from "react";
import { modal } from "../../utils/modal";

const ModalBtn = ({ id, btnName, iconName }) => {
  return (
    <div>
      <button
        className="btn btn-accent btn-outline flex gap-2 "
        onClick={() => modal(id)}
      >
        {iconName}
        {btnName}
      </button>
    </div>
  );
};

export default ModalBtn;
