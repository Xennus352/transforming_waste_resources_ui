import axios from "axios";


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
      console.log("Success:", response.data.message);
    } else {
      console.log("Failed:", response.data.message); // Handle failure
    }
  } catch (error) {
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
       console.log("Success:", response.data.message);
     } else {
       console.log("Failed:", response.data.message); // Handle failure
     }
   } catch (error) {
     console.log("Error during request:", error);
     throw error;
   }
}

// get user save post 
export const getUserSavePost = async () => {
  // php api for feedback
  const URL = "http://localhost:8000/api/userPost/get_user_save_post.php";
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