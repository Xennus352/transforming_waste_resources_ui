import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Send } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  // handle form inputs using react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // api url
  const URL = "http://localhost:8000/src/auth/login.php";

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(URL, data);
      if (response.data.success) {
        toast.success("User successfully login.");
        console.log("Success:", response.data.message); // Logs: User successfully login.
        localStorage.setItem("session_token", response.data.session_token); //token
        localStorage.setItem("tokenExpiration", response.data.tokenExpiration); //exp time
        console.log("Login successful. Session token stored.");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("User login failed!");
        console.log("Failed:", response.data.message); // Handle failure if necessary
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
        {/* username  */}
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
            type="text"
            className="grow"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-red-500 text-sm">Username is required</span>
          )}
        </label>

        {/* password  */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="password"
            {...register("password", { required: true })}
          />
        </label>

        {/* submit  */}
        <button type="submit" className="btn btn-outline">
          Login.. <Send />
        </button>

        <Link
          to="/auth/register"
          className="m-2 text-sm text-slate-400 hover:text-slate-200"
        >
          Create new account?
        </Link>
      </form>
    </div>
  );
};

export default Login;
