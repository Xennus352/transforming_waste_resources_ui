import axios from "axios";
import toast from "react-hot-toast";
import { modal } from "../../utils/modal";
export const feedbackPost = async (data) => {
  // php api for feedback
  const URL = "http://localhost:8000/api/feedback/create_feedback.php";
  try {
    // Get the session token from localStorage
    const sessionToken = localStorage.getItem("session_token");

    // If no session token exists, notify the user and return early
    if (!sessionToken) {
      toast.error("Session expired. Please log in again.");
      modal("login-form");
      return;
    }

    // Include the session token in the Authorization header
    const response = await axios.post(URL, data, {
      headers: {
        Authorization: sessionToken, // Include session token for authentication
      },
    });

    // Handle the response from the server
    if (response.data.success) {
      toast.success(response.data.message);
      console.log("Success:", response.data.message);
    } else {
      toast.error(response.data.message);
      console.log("Failed:", response.data.message); // Handle failure
    }
  } catch (error) {
    console.log("Error during request:", error);
    toast.error("An error occurred. Please try again later.");
  }
};
