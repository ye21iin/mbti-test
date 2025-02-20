import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,

  onLogin: (token) => {
    localStorage.setItem("accessToken", token); // 로그인 시 token 저장
    set({ isAuthenticated: true }); // 인증 상태 변경
  },

  onLogout: () => {
    localStorage.removeItem("accessToken"); // 로그아웃 시 token 삭제
    set({ isAuthenticated: false }); // 인증 상태 변경
    alert("로그아웃되었습니다.");
  },
}));

export default useAuthStore;
