import { useMutation } from "@tanstack/react-query";
import { addRandomPoint, getLastAddTime } from "../api/point";

export function useAddRandomPoint() {
  return useMutation({
    mutationFn: () => addRandomPoint(),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export function useGetLastAddTime() {
  return useQuery({
    queryKey: ["pointTime", userId],
    queryFn: () => getLastAddTime(userId),
    enabled: !!userId,
  });
}
