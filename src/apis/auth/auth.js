import axios from "axios";
import { closeModal } from "../../utils/modal";
import toast from "react-hot-toast";

export const login = async (data) => {
  try {
    // api url
    const URL = "http://localhost:8000/api/auth/login.php";
    const response = await axios.post(URL, data);
    if (response.data.success) {
      toast.success("User successfully login.");
      console.log("Success:", response.data.message); // Logs: User successfully login.
      localStorage.setItem("session_token", response.data.session_token); //token
      localStorage.setItem("tokenExpiration", response.data.tokenExpiration); //exp time
      console.log("Login successful. Session token stored.");

      closeModal("login-form");
    } else {
      toast.error("User login failed!");
      console.log("Failed:", response.data.message); // Handle failure
    }
  } catch (error) {
    console.log(error);
  }
};

export const register = async (data) => {
  try {
    const URL = "http://localhost:8000/api/auth/register.php";

    const response = await axios.post(URL, data);
    if (response.data.success) {
      toast.success("User successfully registered.");
      console.log("Success:", response.data.message); // Logs: User successfully register.

      closeModal("register-form");
    } else {
      toast.error("User registration failed!");
      console.log("Failed:", response.data.message); // Handle failure
    }
  } catch (error) {
    console.log(error);
  }
};
