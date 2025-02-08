import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { modal } from "../utils/modal";

const ProtectedRoute = ({ children }) => {
  // Get the session token and expiration time from localStorage
  const sessionToken = localStorage.getItem("session_token");
  const tokenExpiration = localStorage.getItem("tokenExpiration");

  // Check if the token is expired
  const isTokenExpired = () => {
    // Get the current date
    const currentDate = new Date();

    // console.log("Expiration Date:", tokenExpiration.toString());
    // console.log("Current Date:", currentDate.getSeconds().toString());

    // Check if the token is expired
    return (
      !isNaN(tokenExpiration) && currentDate.getSeconds() > tokenExpiration
    );
  };

  // If the token is expired, clear it from localStorage

  useEffect(() => {
    if (isTokenExpired()) {
      localStorage.removeItem("session_token");
      localStorage.removeItem("tokenExpiration");
      <Navigate to="/" />;
    }
  }, [tokenExpiration]);

  // Check if the session token exists and is valid
  if (sessionToken) {
    return <div>{children}</div>;
  } else {
    // open login modal if no token exists

    return (
      <>
        <Navigate to="/" />
        {setTimeout(() => {
          modal("login-form");
        }, 1000)}
      </>
    );
  }
};

export default ProtectedRoute;
