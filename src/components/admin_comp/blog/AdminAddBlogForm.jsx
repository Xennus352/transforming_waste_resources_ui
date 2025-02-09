import { ImageUp } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateBlog } from "../../../react-query/admin/admin";

const AdminAddBlogForm = () => {
  // handle form inputs using react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [imagePreview, setImagePreview] = useState(null);

  const { mutate: adminCreateBlog } = useCreateBlog();

  const onSubmit = (data) => {
    adminCreateBlog(data);
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     // Check if the selected file is an image
  //     if (file.type.startsWith("image/")) {
  //       // Create a preview URL
  //       const previewUrl = URL.createObjectURL(file);
  //       setImagePreview(previewUrl);
  //     } else {
  //       alert("Please select an image file.");
  //     }
  //   }
  // };
  return (
    <div>
      <form
        className="flex flex-col items-center gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
          className="input input-bordered input-primary w-full max-w-none"
        />

        <textarea
          {...register("description", { required: true })}
          className="textarea textarea-primary w-full"
          placeholder="Description in English"
        ></textarea>

        <textarea
          {...register("description_burmese", { required: true })}

          className="textarea textarea-primary w-full"
          placeholder="Description in Burmese"
        ></textarea> 
        
        <input
          {...register("imgUrl")}
          id="infoPic"
          placeholder="Image Url"
          type="text"
          className=" input input-bordered input-info max-w-none w-full m-4"
        />


        {/* <label htmlFor="infoPic">
          <div className="p-3 m-2 cursor-pointer border border-primary hover:rounded-md bg-base-200 w-full hover:text-slate-400 transition-all duration-100 flex items-center gap-3 justify-between">
            <p>Choose Your Photo</p>
            <ImageUp size={38} />
          </div>
          <input
            {...register("imgUrl")}
            id="infoPic"
            type="file"
            accept="image/*"
            className="hidden file-input file-input-bordered file-input-info max-w-none w-full m-4"
          />
        </label> */}

        <button className="btn btn-outline btn-primary">Create</button>
      </form>
    </div>
  );
};

export default AdminAddBlogForm;
