import { useQuery } from "@tanstack/react-query";
import { getMyNotification } from "../api/notification";

export const useGetMyNotificationQuery = (params) => {
  return useQuery({
    queryKey: ["notifications", params],
    queryFn: () => getMyNotification(params),
  });
};
