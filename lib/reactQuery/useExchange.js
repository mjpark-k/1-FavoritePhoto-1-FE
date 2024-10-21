import { useMutation } from "@tanstack/react-query";
import {
  acceptExchange,
  deleteExchange,
  refuseExchange,
} from "../api/exchange";

// 포토카드 교환 승인
export function useAcceptExchange() {
  return useMutation({
    mutationFn: () => acceptExchange({ exchangedId }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

// 포토카드 교환 거절
export function useRefuseExchange() {
  return useMutation({
    mutationFn: () => refuseExchange({ exchangedId }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

// 포토카드 교환 삭제
export function useDeleteExchange() {
  return useMutation({
    mutationFn: () => deleteExchange({ exchangedId }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
