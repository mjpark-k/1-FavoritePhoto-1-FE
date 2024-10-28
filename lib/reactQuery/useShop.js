import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getShopCards,
  getShopCard,
  deleteShopCard,
  createShopCard,
  purchaseShopCard,
  createExchangeRequest,
  updateShopCard,
} from "@/lib/api/shop.js";

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
  return useMutation({
    mutationFn: (shopId) => deleteShopCard(shopId),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useCreateShopCard = () => {
  return useMutation({
    mutationFn: ({
      cardId,
      salesQuantity,
      price,
      exchangeGrade,
      exchangeGenre,
      exchangeDescription,
    }) =>
      createShopCard({
        cardId,
        salesQuantity,
        price,
        exchangeGrade,
        exchangeGenre,
        exchangeDescription,
      }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePurchaseShopCard = () => {
  return useMutation({
    mutationFn: ({ shopId, purchaseQuantity }) =>
      purchaseShopCard({ shopId, purchaseQuantity }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useCreateExchangeRequest = () => {
  return useMutation({
    mutationFn: ({ shopId, cardId, description }) =>
      createExchangeRequest({
        shopId,
        cardId,
        description,
      }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useUpdateShopCard = () => {
  return useMutation({
    mutationFn: ({ shopId, updateData }) =>
      updateShopCard({ shopId, updateData }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
