import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, getAllProduct } from "../apis/market/productControl";

// to create product
export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createProduct(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["user-create-post"]);
      queryClient.refetchQueries(["user-create-post"]);
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
