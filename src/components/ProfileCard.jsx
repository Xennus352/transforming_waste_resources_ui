import React, { useState } from "react";
import recycleSign from "../assets/recycle-sign.png";
import { useGetCurrentUser, useUpdateUser } from "../react-query/user";
import { useForm } from "react-hook-form";
import { SmilePlus } from "lucide-react";

const ProfileCard = () => {
  const [base64, setBase64] = useState("");

  // get current user
  const { data: user } = useGetCurrentUser();

  // update user
  const { mutate: userUpdate } = useUpdateUser();

  //form control
  const {
    register,
    handleSubmit,
    setValue, //To manually set form values
    formState: { errors },
  } = useForm();

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
    data.picture = base64;
    userUpdate(data);
  };

  return (
    <div>
      <div
        className="bg-slate-500 w-full md:grid md:grid-cols-3 p-4 
            gap-6 flex flex-col justify-center 
            bg-opacity-50 backdrop-blur-lg rounded-lg"
      >
        <div className="">
          {/* left side  */}
          <div className="md:flex md:justify-center">
            <label htmlFor="pic">
              <img
                className="rounded-full sm:rounded-md md:rounded-sm hover:rounded-xl hover:shadow-xl hover:cursor-pointer m-1"
                src={user?.picture ? user.picture : recycleSign}
                alt="profilePic"
              />
              <div
                className="text-white bg-primary rounded-lg p-1 flex gap-1 items-center justify-center hover:cursor-pointer
                hover:text-slate-700 hover:font-bold hover:text-lg
                transition-all duration-300 ease-in-out
              "
              >
                {" "}
                Update Profile Picture <SmilePlus />
              </div>
            </label>
          </div>
        </div>
        {/* mid side  */}
        <div className="border rounded-lg  col-span-2 p-4">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <input type="hidden" {...register("picture")} />{" "}
              {/* Hidden input for base64 */}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="pic"
                onChange={handleFileChange}
              />
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  defaultValue={user?.email}
                  {...register("email")}
                  type="text"
                  className="grow"
                  placeholder="Email"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  defaultValue={user?.username}
                  {...register("name")}
                  type="text"
                  className="grow"
                  placeholder="Username"
                />
              </label>
              <textarea
                className="textarea textarea-primary h-24"
                defaultValue={user?.bio}
                placeholder="Bio"
                {...register("bio")}
              ></textarea>
              <button className="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
