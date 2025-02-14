import React, { createContext, useContext, useState } from "react";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [currentPostId, setCurrentPostId] = useState("");

  return (
    <CommentContext.Provider
      value={{
        currentPostId,
        setCurrentPostId,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useComment = () => {
  return useContext(CommentContext);
};
