import { create } from "zustand";
import { getRemainingTime, isTokenValid } from "../utils/decodingToken";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  token: null,
  timerId: null,

  onLogin: (token) => {
    localStorage.setItem("accessToken", token);
    set({ token, isAuthenticated: true });
    useAuthStore.getState().checkTokenExpiration();
  },

  onLogout: () => {
    localStorage.removeItem("accessToken");
    set({ token: null, isAuthenticated: false });
    // timer 초기화
    const { timerId } = useAuthStore.getState();
    if (timerId) {
      clearTimeout(timerId);
      set({ timerId: null });
    }
    alert("로그아웃되었습니다.");
  },

  checkTokenExpiration: () => {
    if (!isTokenValid()) {
      useAuthStore.getState().onLogout();
      return;
    }
    // timer 중복실행 방지
    const { timerId } = useAuthStore.getState();
    if (timerId) {
      clearTimeout(timerId);
    }
    // timer 세팅
    const newTimerId = setTimeout(() => {
      useAuthStore.getState().onLogout();
    }, getRemainingTime());
    set({ timerId: newTimerId });
  },
}));

export default useAuthStore;
