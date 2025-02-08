import { useMutation } from "@tanstack/react-query";
import { feedbackPost } from "../apis/feedback/feedback_control";


export const useCreateFeedback = () => {
    return useMutation({
      mutationFn: (data) =>
        feedbackPost(data)
    });
  };
