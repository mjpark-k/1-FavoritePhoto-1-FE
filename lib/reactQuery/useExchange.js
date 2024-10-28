import { useMutation } from '@tanstack/react-query';
import {
  acceptExchange,
  deleteExchange,
  refuseExchange,
} from '../api/exchange';

// 포토카드 교환 승인
export function useAcceptExchange() {
  return useMutation({
    mutationFn: (exchangedId) => acceptExchange({ exchangedId }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });
}

// 포토카드 교환 거절
export function useRefuseExchange() {
  return useMutation({
    mutationFn: (exchangedId) => refuseExchange({ exchangedId }),
    onSuccess: (data) => {
      alert('교환이 거절되었습니다.');
      console.log(data);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });
}

// 포토카드 교환 삭제
export function useDeleteExchange() {
  return useMutation({
    mutationFn: ({ exchangedId }) => deleteExchange({ exchangedId }),
    onSuccess: (data) => {
      alert('정상적으로 취소되었습니다 :)');
      window.location.reload();
      console.log(data);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });
}
