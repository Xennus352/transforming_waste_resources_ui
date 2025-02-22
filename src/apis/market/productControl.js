import axios from "axios";
import toast from "react-hot-toast";

// user create product
export const createProduct = async (data) => {
  // php api for feedback
  const URL = "http://localhost:8000/api/market/create_product.php";
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
      toast.success("Successfully Created!");
      console.log("Success:", response.data.message);
    } else {
      //one kind of error
      toast.error("Something went wrong!");
      console.log("Pending:", "Waiting Response"); // Handle failure
    }
  } catch (error) {
    toast.error(error);
    console.log("Error during request:", error);
    throw error;
  }
};

// get all product
export const getAllProduct = async () => {
  // php api for feedback
  const URL = "http://localhost:8000/api/market/getall_product.php";
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

// order product
export const orderProduct = async (data) => {
  // php api for feedback
  const URL = "http://localhost:8000/api/market/order_product.php";
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
      toast.success("Successfully Ordered!");
      console.log("Success:", response.data.message);
    } else {
      //one kind of error
      toast.error("Something went wrong!");
      console.log("Pending:", "Waiting Response"); // Handle failure
    }
  } catch (error) {
    toast.error(error);
    console.log("Error during request:", error);
    throw error;
  }
};

//cancel order
export const cancelOrder = async (product_id) => {
  try {
    // Get the session token from localStorage
    const sessionToken = localStorage.getItem("session_token");

    // If no session token exists, notify the user and return early
    if (!sessionToken) {
      console.log("Session expired. Please log in again.");
      throw new Error("Session expired. Please log in again."); // Throw an error to indicate the issue
    }

    const URL = "http://localhost:8000/api/market/cancel_product.php";

    // Send the DELETE request with the post ID in the request body
    const response = await axios.delete(URL, {
      headers: {
        Authorization: sessionToken, // the token
      },

      data: {
        product_id, // the post ID
      },
    });

    if (response.data.success) {
      toast.success(response.data.message);
      window.location.reload();
      return response.data;
    } else {
      toast.error(response.data.message);
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error during request:", error);
    toast.error("An error occurred. Please try again later.");
    throw new Error(error);
  }
};
