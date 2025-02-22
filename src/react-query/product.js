import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  cancelOrder,
  createProduct,
  getAllProduct,
  orderProduct,
} from "../apis/market/productControl";

// to create product
export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createProduct(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["product"]);
      queryClient.refetchQueries(["product"]);
    },
  });
};

// get product
export const useGetProduct = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: getAllProduct,
    refetchInterval: 10000,
    staleTime: 5000,
    refetchIntervalInBackground: 10000,
    notifyOnChangeProps: ["data"],
  });
};

// get order
export const useGetOrder = () => {
  return useQuery({
    queryKey: ["order"],
    queryFn: getAllProduct,
    refetchInterval: 10000,
    staleTime: 5000,
    refetchIntervalInBackground: 10000,
    notifyOnChangeProps: ["data"],
  });
};

// order product
export const useOrderProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => orderProduct(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["order"]);
      queryClient.refetchQueries(["order"]);
    },
  });
};

// cancle order
export const useCancleOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:(product_id) => cancelOrder(product_id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["order"]);
      queryClient.refetchQueries(["order"]);
    },
  });
};
