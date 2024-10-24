import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null, // 로그인한 사용자 정보
      login: (userData) => set({ user: userData }), // 로그인 시 실행
      logout: () => set({ user: null }), // 로그아웃 시 실행
    }),
    {
      name: "userData",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
