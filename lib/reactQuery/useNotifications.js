import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getMyNotification,
  checkNotification,
  deleteNotification,
} from "../api/notification";

export const useGetMyNotificationQuery = (params) => {
  return useQuery({
    queryKey: ["notifications", params],
    queryFn: () => getMyNotification(params),
    keepPreviousData: true,
  });
};

export const useCheckNotification = () => {
  return useMutation({
    mutationFn: ({ notificationId }) => checkNotification({ notificationId }),
    onSuccess: () => {},
    onError: (error) => {
      console.error(error);
    },
  });
};

export function useDeleteNotification() {
  return useMutation({
    mutationFn: ({ notificationId }) => deleteNotification({ notificationId }),
    onSuccess: () => {},
    onError: (error) => {
      console.error(error);
    },
  });
}
