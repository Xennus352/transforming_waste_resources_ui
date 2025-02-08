import { ImageUp, Send } from "lucide-react";
import React from "react";

const AddBlogForm = () => {
  return (
    <div className="">
      <form className="flex flex-col items-center">
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea className="textarea textarea-info"></textarea>
        </label>
        <label htmlFor="photo">
          <div className="p-3 m-3 cursor-pointer border border-primary hover:rounded-md hover:text-slate-400 transition-all duration-100 flex items-center gap-3 justify-between">
            <p>Choose Your Photo</p>
            <ImageUp  size={38}/>
          </div>
          <input
            id="photo"
            type="file"
            className="hidden file-input file-input-bordered file-input-info max-w-none w-full m-4"
          />
        </label>

        <button className="btn btn-outline btn-primary m-2 w-full">
          Post <Send />
        </button>
      </form>
    </div>
  );
};

export default AddBlogForm;
