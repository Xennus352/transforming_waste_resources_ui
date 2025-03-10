import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  approvePost,
  createBlogPost,
  deleteBlogHand,
  deleteBlogPost,
  getBlogPost,
} from "../../apis/admin/blog_control";
import { deleteUser, getAllUsers } from "../../apis/user/currentUser";

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createBlogPost(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["admin-create-blog"]);
    },
  });
};

export const useGetBlog = () => {
  return useQuery({
    queryKey: ["admin-create-blog"],
    queryFn: getBlogPost,
    refetchInterval: 10000,
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBlogPost,
    onSuccess: () => {
      // Invalidate and refetch the blog list
      queryClient.invalidateQueries(["admin-create-blog"]);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
};

export const useApprovePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => approvePost({ id }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["user-create-post"]);
    },
  });
};

// handmade delete
export const useDeleteHand = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBlogHand,
    onSuccess: () => {
      // Invalidate and refetch the blog list
      queryClient.invalidateQueries(["admin-create-blog"]);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
};

//get all users
export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsers,
    refetchInterval: 10000,
  });
};

//delete user
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      // Invalidate and refetch the blog list
      queryClient.invalidateQueries(["all-users"]);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
};
