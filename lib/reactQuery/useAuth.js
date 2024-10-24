import { useMutation } from "@tanstack/react-query";
import { postSignin, postSignout, postSignup } from "../api/auth";

export function usePostSignin() {
  return useMutation({
    mutationFn: ({ email, password }) => postSignin({ email, password }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export function usePostSignup() {
  return useMutation({
    mutationFn: ({ email, password, nickname }) =>
      postSignup({ email, password, nickname }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export function usePostSignout() {
  return useMutation({
    mutationFn: () => postSignout(),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
