import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, logout, register } from "../apis/auth/auth";

export const useUserLogin = () => {
  const queryClient = useQueryClient();


  return useMutation({
    mutationFn: (data) => login(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["get-current-user-data"]);
    },
  });
};

export const useUserRegister = () => {
  return useMutation({
    mutationFn: (data) => register(data),
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => logout(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["get-current-user-data"]);
    },
  });
};
