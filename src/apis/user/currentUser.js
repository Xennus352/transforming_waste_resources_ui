import axios from "axios";
import toast from "react-hot-toast";

export const getCurrentUser = async () => {
  // PHP API endpoint for getting the current user
  const URL = "http://localhost:8000/api/auth/get_current_user.php";

  try {
    // Get the session token from localStorage
    const sessionToken = localStorage.getItem("session_token");

    // If no session token exists, notify the user and return early
    if (!sessionToken) {
      console.log("Session expired. Please log in again.");
      throw new Error("Session expired. Please log in again."); // Throw an error to indicate the issue
    }

    // Include the session token in the Authorization header
    const response = await axios.get(URL, {
      headers: {
        Authorization: sessionToken, // the token
      },
    });

    // Handle the response from the server
    if (response.data.success) {
      return response.data.data; // Return the user data
    } else {
      // Handle failure
      throw new Error(`Failed: ${response.data.message}`);
    }
  } catch (error) {
    throw new Error(`Error during request: ${error.message}`);
  }
};

// update user
export const updateUser = async (data) => {
  // php api for feedback
  const URL = "http://localhost:8000/api/user/update_user.php";
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
      toast.success("Successfully Updated!");
      console.log("Success:", response.data.message);
    } else {
      //one kind of error
      toast.error("Something went wrong");
      console.log("Pending:", "Waiting Response"); // Handle failure
    }
  } catch (error) {
    toast.error(error);
    console.log("Error during request:", error);
    throw error;
  }
};

// user create post
export const createUserPost = async (data) => {
  // php api for feedback
  const URL = "http://localhost:8000/api/userPost/create_user_post.php";
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
      toast.success("Waiting response to Create!");
      console.log("Pending:", "Waiting Response"); // Handle failure
    }
  } catch (error) {
    toast.error(error);
    console.log("Error during request:", error);
    throw error;
  }
};

// get user post
export const getUserPost = async () => {
  // php api for feedback
  const URL = "http://localhost:8000/api/userPost/get_user_post.php";
  try {
    const response = await axios.get(URL);

    // Handle the response from the server
    if (response.data) {
      return response.data.data;
    } else {
      console.log("Failed:", response.data.message); // Handle failure
    }
  } catch (error) {
    console.log("Error during request:", error);
    throw error;
  }
};

// // delete user post
// export const deleteUserPost = async (id) => {
//   try {
//     const URL = "http://localhost:8000/api/userPost/delete_post.php";
//     const response = await axios.delete(URL, { data: { id } });

//     if (response.data.success) {
//       toast.success(response.data.message);
//       return response.data;
//     } else {
//       toast.error(response.data.message);
//       throw new Error(response.data.message);
//     }
//   } catch (error) {
//     console.error("Error during request:", error);
//     toast.error("An error occurred. Please try again later.");
//     throw error;
//   }
// }

// save user post
export const saveUserPost = async (id) => {
  // php api for feedback
  const URL = "http://localhost:8000/api/userPost/user_save_post.php";
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
      toast.success("Successfully Saved!");
      console.log("Success:", response.data.message);
    } else {
      toast.error("Fail to Save!");
      console.log("Failed:", response.data.message); // Handle failure
    }
  } catch (error) {
    toast.error(error);
    console.log("Error during request:", error);
    throw error;
  }
};

// get user save post
export const getUserSavePost = async () => {
  // php api for feedback
  const URL = "http://localhost:8000/api/userPost/get_user_save_post.php";
  try {
    // Get the session token from localStorage
    const sessionToken = localStorage.getItem("session_token");

    // If no session token exists, notify the user and return early
    if (!sessionToken) {
      console.log("Session expired. Please log in again.");
      throw new Error("Session expired. Please log in again."); // Throw an error to indicate the issue
    }

    // Include the session token in the Authorization header
    const response = await axios.get(URL, {
      headers: {
        Authorization: sessionToken, // the token
      },
    });
    // Handle the response from the server
    if (response.data) {
      return response.data.data || [];
    } else {
      console.log("Failed:", response.data.message); // Handle failure
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.log("Error during request:", error);
    throw error;
  }
};

// delete user save post
export const deleteUserSavePost = async (id) => {
  try {
    // Get the session token from localStorage
    const sessionToken = localStorage.getItem("session_token");

    // If no session token exists, notify the user and return early
    if (!sessionToken) {
      console.log("Session expired. Please log in again.");
      throw new Error("Session expired. Please log in again."); // Throw an error to indicate the issue
    }

    const URL = "http://localhost:8000/api/userPost/delete_user_save_post.php";

    // Send the DELETE request with the post ID in the request body
    const response = await axios.delete(URL, {
      headers: {
        Authorization: sessionToken, // the token
      },
      data: {
        post_id: id, // Wrap the id in an object
      },
    });

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
    throw new Error(error);
  }
};

// get like
export const getLike = async () => {
  // php api for feedback
  const URL = "http://localhost:8000/api/userPost/get_like.php";
  try {
    // Get the session token from localStorage
    const sessionToken = localStorage.getItem("session_token");

    // If no session token exists, notify the user and return early
    if (!sessionToken) {
      console.log("Session expired. Please log in again.");
      throw new Error("Session expired. Please log in again."); // Throw an error to indicate the issue
    }

    // Include the session token in the Authorization header
    const response = await axios.get(URL, {
      headers: {
        Authorization: sessionToken, // the token
      },
    });
    // Handle the response from the server
    if (response.data) {
      console.log(response.data.message);
      return response.data.data || [];
    } else {
      console.log("Failed:", response.data.message); // Handle failure
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.log("Error during request:", error);
    throw error;
  }
};

// like to post
export const likeUserPost = async (id) => {
  // php api for feedback
  const URL = "http://localhost:8000/api/userPost/like_user.php";
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
      toast.success("Liked!");
      console.log("Success:", response.data.message);
    } else {
      toast.error("Fail!");
      console.log("Failed:", response.data.message); // Handle failure
    }
  } catch (error) {
    toast.error(error);
    console.log("Error during request:", error);
    throw error;
  }
};

// comment to post
export const commentPost = async (data) => {
  // php api for feedback
  const URL = "http://localhost:8000/api/userPost/sent_comment.php";
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
      // toast.success("Successfully Saved!");
      console.log("Success:", response.data.message);
    } else {
      toast.error("Fail to comment that post!");
      console.log("Failed:", response.data.message); // Handle failure
    }
  } catch (error) {
    toast.error(error);
    console.log("Error during request:", error);
    throw error;
  }
};

// get comments
export const getCommentPost = async () => {
  // php api for feedback
  const URL = "http://localhost:8000/api/userPost/get_comment.php";
  try {
    // Get the session token from localStorage
    const sessionToken = localStorage.getItem("session_token");

    // If no session token exists, notify the user and return early
    if (!sessionToken) {
      console.log("Session expired. Please log in again.");
      // throw new Error("Session expired. Please log in again."); // Throw an error to indicate the issue
      return null;
    }

    // Include the session token in the Authorization header
    const response = await axios.get(URL, {
      headers: {
        Authorization: sessionToken, // the token
      },
    });
    // Handle the response from the server
    if (response.data) {
      console.log(response.data.message);
      return response.data.data || [];
    } else {
      console.log("Failed:", response.data.message); // Handle failure
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.log("Error during request:", error);
    throw error;
  }
};

// get by most like
export const getByMostLike = async () => {
  // php api for feedback
  const URL = "http://localhost:8000/api/userPost/get_by_most_like.php";
  try {
    // Get the session token from localStorage
    const sessionToken = localStorage.getItem("session_token");

    // If no session token exists, notify the user and return early
    if (!sessionToken) {
      console.log("Session expired. Please log in again.");
      // throw new Error("Session expired. Please log in again."); // Throw an error to indicate the issue
      return null;
    }

    // Include the session token in the Authorization header
    const response = await axios.get(URL, {
      headers: {
        Authorization: sessionToken, // the token
      },
    });
    // Handle the response from the server
    if (response.data) {
      console.log(response.data.message);
      return response.data.data || [];
    } else {
      console.log("Failed:", response.data.message); // Handle failure
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.log("Error during request:", error);
    throw error;
  }
};

// set useful
export const makeUseful = async (id) => {
  // php api for feedback
  const URL = "http://localhost:8000/api/userPost/set_useful.php";
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
      toast.success("Successfully Supported!");
      console.log("Success:", response.data.message);
    } else {
      toast.error("Fail to Support!");
      console.log("Failed:", response.data.message); // Handle failure
    }
  } catch (error) {
    toast.error(error);
    console.log("Error during request:", error);
    throw error;
  }
};
