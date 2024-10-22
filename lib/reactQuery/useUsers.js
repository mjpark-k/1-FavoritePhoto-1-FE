import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getUsersMyCards,
  getUsersMyCardsExchange,
  getUsersMyCardsShop,
  postUsersMyCards,
} from "../api/users";
import { QUERY_KEYS } from "../constant/queryKeys";

export function useUsersMyCardsQuery({ id }) {
  return useQuery({
    queryKey: [QUERY_KEYS.USERS_MY_CARDS, id],
    queryFn: () => getUsersMyCards({ id }),
    keepPreviousData: true,
  });
}

export function usePostUsersMyCardsMutation() {
  return useMutation({
    mutationFn: ({ name, description, image, grade, genre, price, quantity }) =>
      postUsersMyCards({
        name,
        description,
        image,
        grade,
        genre,
        price,
        quantity,
      }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
}

export function useUsersMyCardsShopQuery({
  sort,
  genre,
  sellout,
  grade,
  ownerId,
  pageNum,
  pageSize,
  keyword,
}) {
  return useQuery({
    queryKey: [
      QUERY_KEYS.USERS_MY_CARDS_SHOP,
      sort,
      genre,
      sellout,
      grade,
      ownerId,
      pageNum,
      pageSize,
      keyword,
    ],
    queryFn: () =>
      getUsersMyCardsShop({
        sort,
        genre,
        sellout,
        grade,
        ownerId,
        pageNum,
        pageSize,
        keyword,
      }),
    keepPreviousData: true,
  });
}

export function useUsersMyCardsExchangeQuery({
  sort,
  genre,
  sellout,
  grade,
  ownerId,
  pageNum,
  pageSize,
  keyword,
}) {
  return useQuery({
    queryKey: [
      QUERY_KEYS.USERS_MY_CARDS_EXCHANGE,
      sort,
      genre,
      sellout,
      grade,
      ownerId,
      pageNum,
      pageSize,
      keyword,
    ],
    queryFn: () =>
      getUsersMyCardsExchange({
        sort,
        genre,
        sellout,
        grade,
        ownerId,
        pageNum,
        pageSize,
        keyword,
      }),
    keepPreviousData: true,
  });
}
