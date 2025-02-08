import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "../apis/user/currentUser";

export const useGetCurrentUser = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["get-current-user-data"],
    queryFn: getCurrentUser,
    staleTime: 1000,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["get-current-user-data"] });
    },
  });
};
