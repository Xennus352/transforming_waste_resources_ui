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
