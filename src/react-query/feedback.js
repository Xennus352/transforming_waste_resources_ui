import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteFeedback,
  feedbackPost,
  getFeedback,
} from "../apis/feedback/feedback_control";

export const useCreateFeedback = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => feedbackPost(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["admin-create-blog"]);
    },
  });
};

export const useGetFeedback = () => {
  return useQuery({
    queryKey: ["get-feedback"],
    queryFn: getFeedback,
    refetchInterval: 10000,
  });
};

export const useFeedbackDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFeedback,
    onSuccess: () => {
      // Invalidate and refetch the feedback list
      queryClient.invalidateQueries(["get-feedback"]);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
};
