import { ImageUp, Send } from "lucide-react";
import React, { useState } from "react";
import { useCreateUserPost } from "../../../react-query/user";
import { useForm } from "react-hook-form";

const AddBlogForm = () => {
  const [base64, setBase64] = useState("");
  const [error, setError] = useState("");

  // handle form inputs using react hook form
  const {
    register,
    handleSubmit,
    setValue, //To manually set form values
    formState: { errors },
  } = useForm();

  const { mutate: userCreatePost } = useCreateUserPost();

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setBase64(reader.result);
          setValue("image", reader.result); // Update react-hook-form
        }
      };
      reader.onerror = () => {
        setError("Error converting file");
      };
    }
  };

  const onSubmit = (data) => {
    if (!base64) {
      setError("Please upload an image.");
      return;
    }
    data.picture = base64; //Ensure base64 is sent in form data
    userCreatePost(data);
  };

  return (
    <div className="">
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          <p className="text-xl text-white">Title</p>
          <input
            {...register("title", { required: true })}
            type="text"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </label>
        <label>
          <p className="text-xl text-white">Category</p>
          <input
            {...register("category", {
              required: "This field is required",
              validate: {
                validCategory: (value) =>
                  ["water", "air", "ground", "plastic", "other"].includes(
                    value
                  ) || "Invalid category",
              },
            })}
            type="text"
            placeholder="water, air, ground, plastic or other"
            className="input input-bordered input-info w-full max-w-xs"
          />
          {errors.category && (
            <p className="text-error bg-slate-200 rounded-lg p-2 m-1 text-center">
              {errors.category.message}
            </p>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-xl text-white">Description</span>
          </div>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-info"
          ></textarea>
        </label>

        <label>
          <input type="hidden" {...register("picture")} />{" "}
          {/* Hidden input for base64 */}
          <div className="p-3 m-2 cursor-pointer border border-primary hover:rounded-md bg-base-200 w-full hover:text-slate-600 transition-all duration-100 flex items-center gap-3 justify-between">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <p>Choose Your Photo</p>
            <ImageUp size={38} />
            {error && <p className="text-red-500">{error}</p>}
            {base64 && (
              <img src={base64} alt="Uploaded" className="w-32 h-32 mt-2" />
            )}
          </div>
        </label>

        <button className="btn btn-outline btn-primary m-2 w-full">
          Post <Send />
        </button>
      </form>
    </div>
  );
};

export default AddBlogForm;
