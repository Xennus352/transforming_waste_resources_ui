import { ImageUp } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateBlog } from "../../../react-query/admin/admin";

const AdminAddBlogForm = () => {
  const [base64, setBase64] = useState("");
  const [error, setError] = useState("");

  // handle form inputs using react hook form
  const {
    register,
    handleSubmit,
    setValue, // ✅ To manually set form values
    formState: { errors },
  } = useForm();

  const { mutate: adminCreateBlog } = useCreateBlog();

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setBase64(reader.result);
          setValue("image", reader.result); // ✅ Update react-hook-form
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
    data.imgUrl = base64; // ✅ Ensure base64 is sent in form data
    adminCreateBlog(data);
  };

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
          className="textarea textarea-primary w-full  whitespace-pre-wrap"
          placeholder="Description in English"
        ></textarea>
        <textarea
          {...register("description_burmese", { required: true })}
          className="textarea textarea-primary w-full whitespace-pre-wrap"
          placeholder="Description in Burmese"
        ></textarea>

        <label htmlFor="infoPic">
          <input type="hidden" {...register("imgUrl")} />{" "}
          {/* ✅ Hidden input for base64 */}
          <div className="p-3 m-2 cursor-pointer border border-primary hover:rounded-md bg-base-200 w-full hover:text-slate-400 transition-all duration-100 flex items-center gap-3 justify-between">
            <input
              type="file"
              accept="image/*"
              id="infoPic"
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
        <button className="btn btn-outline btn-primary">Create</button>
      </form>
    </div>
  );
};

export default AdminAddBlogForm;
