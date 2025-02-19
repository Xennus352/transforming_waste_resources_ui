import axios from "axios";
import toast from "react-hot-toast";
import { modal } from "../../utils/modal";

export const createBlogPost = async (data) => {
  // php api for feedback
  const URL = "http://localhost:8000/api/blog/create_blog.php";
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

export const getBlogPost = async () => {
  // php api for feedback
  const URL = "http://localhost:8000/api/blog/get_blog.php";
  try {
    const response = await axios.get(URL);

    // Handle the response from the server
    if (response.data) {
      return response.data.data;
    } else {
      toast.error(response.data.message);
      console.log("Failed:", response.data.message); // Handle failure
    }
  } catch (error) {
    console.log("Error during request:", error);
    toast.error("An error occurred. Please try again later.");
    throw error;
  }
};

// user interactive post delete
export const deleteBlogPost = async (id) => {
  try {
    const URL = "http://localhost:8000/api/userPost/delete_post.php";
    const response = await axios.delete(URL, { data: { id } });

    if (response.data.success) {
      toast.success(response.data.message);
      return response.data;
    } else {
      toast.error(response.data.message);
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error during request:", error);
    toast.error("An error occurred. Please try again later.");
    throw error;
  }
};

export const approvePost = async (id) => {
  // php api for feedback
  const URL = "http://localhost:8000/api/userPost/approve_user_post.php";
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
    const response = await axios.post(URL, id, {
      headers: {
        Authorization: sessionToken, // Include session token for authentication
      },
    });

    // Handle the response from the server
    if (response.data.success) {
      toast.success(response.data.message);
      console.log("Success:", response.data.message);
    } else {
      toast.success("Approved!");
      console.log("Failed:", response.data.message); // Handle failure
    }
  } catch (error) {
    console.log("Error during request:", error);
    toast.error("An error occurred. Please try again later.");
  }
};

export const deleteBlogHand = async (id) => {
  try {
    const URL = "http://localhost:8000/api/blog/delete_blog.php";
    const response = await axios.delete(URL, { data: { id } });

    if (response.data.success) {
      toast.success(response.data.message);
      return response.data;
    } else {
      toast.error(response.data.message);
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error during request:", error);
    toast.error("An error occurred. Please try again later.");
    throw error;
  }
};
