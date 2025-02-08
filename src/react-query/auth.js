import { useMutation } from "@tanstack/react-query";
import {login, register} from "../apis/auth/auth"


export const useUserLogin = () => {
    return useMutation({
      mutationFn: (data) =>
        login(data)
    });
  };


  export const useUserRegister = () => {
    return useMutation({
      mutationFn: (data) =>
        register(data)
    });
  };

