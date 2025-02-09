import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createUserPost,
  getCurrentUser,
  getUserPost,
} from "../apis/user/currentUser";

// to get current user
export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["get-current-user-data"],
    queryFn: getCurrentUser,
  });
};

// to create post from user
export const useCreateUserPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createUserPost(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["user-create-post"]);
    },
  });
};

// get user post

export const useGetUserPost = () => {
  return useQuery({
    queryKey: ["user-create-post"],
    queryFn: getUserPost,
    refetchInterval: 10000,
  });
};
