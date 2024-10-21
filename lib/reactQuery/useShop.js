import { useQuery } from "@tanstack/react-query";
import { getShopCards } from "@/lib/api/shop.js";

export const useShopCards = (params) => {
  return useQuery({
    queryKey: ["shopCards", params],
    queryFn: () => getShopCards(params),
  });
};
