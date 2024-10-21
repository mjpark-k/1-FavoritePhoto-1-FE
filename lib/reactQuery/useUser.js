import { useQuery } from '@tanstack/react-query';
import { getUserMyCards } from '../api/user';
import { QUERY_KEYS } from '../constant/queryKeys';

export function useUserMyCardsQuery({ initialData = [] } = {}) {
  return useQuery({
    queryKey: [QUERY_KEYS.USER_MY_CARDS],
    queryFn: () => getUserMyCards(),
    initialData,
    keepPreviousData: true,
  });
}

export function useUserMyCardsShopQuery(params) {}
