import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  commentPost,
  createUserPost,
  deleteUserSavePost,
  getByMostLike,
  getCommentPost,
  getCurrentUser,
  getLike,
  getUserPost,
  getUserSavePost,
  likeUserPost,
  makeUseful,
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
    notifyOnChangeProps: ["data"],
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

//get like
export const useGetLike = () => {
  return useQuery({
    queryKey: ["get-like"],
    queryFn: () => getLike(),
    refetchInterval: 10000,
    staleTime: 5000,
    // refetchIntervalInBackground: 10000,
    // notifyOnChangeProps: ["data"],
  });
};

// get like by most like
export const useGetLikeByTotalCount = () => {
  return useQuery({
    queryKey: ["get-by-most-like"],
    queryFn: () => getByMostLike(),
    refetchInterval: 10000,
    staleTime: 5000,
    // refetchIntervalInBackground: 10000,
    // notifyOnChangeProps: ["data"],
  });
};

// like user post
export const useLikePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => likeUserPost({ id }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["get-like"]);
    },
  });
};

// get comments
export const useGetComment = () => {
  return useQuery({
    queryKey: ["user-comment"],
    queryFn: () => getCommentPost(),
    refetchInterval: 10000,
    staleTime: 5000,
    // refetchIntervalInBackground: 10000,
    // notifyOnChangeProps: ["data"],
  });
};

// comment post
export const useCommentPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => commentPost(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["user-comment"]);
    },
  });
};

// make useful post
export const useMakeUsefulPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => makeUseful({id}),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["user-create-post"]);
    },
  });
};
