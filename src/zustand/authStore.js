import { create } from "zustand";

const token = localStorage.getItem("token");

const useAuthStore = create((set) => ({
  isAuthenticated: !!token,

  login: (token) => {
    localStorage.setItem("accessToken", token); // 로그인 시 token 저장
    set({ isAuthenticated: true }); // 인증 상태 변경
  },

  logout: () => {
    localStorage.removeItem("accessToken"); // 로그아웃 시 token 삭제
    set({ isAuthenticated: false }); // 인증 상태 변경
  },
}));

export default useAuthStore;
