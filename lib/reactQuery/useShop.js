import { useQuery } from "@tanstack/react-query";
import {
  getShopCards,
  getShopCard,
  deleteShopCard,
  createShopCard,
  createExchangeRequest,
  updateShopCard,
} from "@/lib/api/shop.js";
import { useMutation, queryClient } from "@tanstack/react-query";

export const useShopCards = (params) => {
  return useQuery({
    queryKey: ["shopCards", params],
    queryFn: () => getShopCards(params),
  });
};

export const useShopCard = (shopId) => {
  return useQuery({
    queryKey: ["shopCard", shopId],
    queryFn: () => getShopCard(shopId),
  });
};

export const useDeleteShopCard = () => {
  return useMutation(deleteShopCard, {
    onSuccess: () => {
      queryClient.invalidateQueries("shopCards");
    },
  });
};

export const useCreateShopCard = () => {
  return useMutation(createShopCard, {
    onSuccess: () => {
      queryClient.invalidateQueries("shopCards");
    },
  });
};

export const useCreateExchangeRequest = () => {
  return useMutation(createExchangeRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries("exchangeRequests");
    },
  });
};

export const useUpdateShopCard = () => {
  return useMutation(updateShopCard, {
    onSuccess: () => {
      queryClient.invalidateQueries("shopCards");
    },
  });
};
