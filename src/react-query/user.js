import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createUserPost,
  deleteUserSavePost,
  getCurrentUser,
  getUserPost,
  getUserSavePost,
  likeUserPost,
  saveUserPost,
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
      queryClient.refetchQueries(["user-create-post"]);
    },
  });
};

// get user post
export const useGetUserPost = () => {
  return useQuery({
    queryKey: ["user-create-post"],
    queryFn: getUserPost,
    refetchInterval: 10000,
    staleTime: 5000,
    refetchIntervalInBackground: 10000,
    notifyOnChangeProps: ['data']
  });
};

// get save post
export const useGetUserSavePost = () => {
  return useQuery({
    queryKey: ["user-save-post"],
    queryFn: getUserSavePost,
    // refetchInterval: 10000,
  });
};

// save user post
export const useSaveUserPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => saveUserPost({ id }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["user-save-post"]);
    },
  });
};

//  delete user save post
export const useDeleteUserSavePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteUserSavePost(id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["user-save-post"]);
      window.location.reload();
    },
  });
};

// like user post
export const useLikePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => likeUserPost({ id }),
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries(["user-like-post"]);
    },
  });
};
