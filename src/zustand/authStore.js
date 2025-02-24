import { create } from "zustand";
import { getRemainingTime, isTokenValid } from "../utils/decodingToken";

const useAuthStore = create((set, get) => ({
  isAuthenticated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") || null,
  timerId: null,

  // 초기화 함수: 페이지 로드 시 토큰 유효성 검사
  initializeAuthState: () => {
    const token = localStorage.getItem("accessToken");
    if (token && isTokenValid(token)) {
      set({ token, isAuthenticated: true });
      get().checkTokenExpiration();
    }
  },

  // 로그인 함수
  onLogin: (token) => {
    localStorage.setItem("accessToken", token); // 토큰만 localStorage에 저장
    set({ token, isAuthenticated: true });
    get().checkTokenExpiration();
  },

  // 로그아웃 함수
  onLogout: () => {
    localStorage.removeItem("accessToken"); // 토큰 삭제
    set({ token: null, isAuthenticated: false });

    // 타이머 초기화
    const { timerId } = get();
    if (timerId) {
      clearTimeout(timerId);
      set({ timerId: null });
    }
  },

  // 토큰 만료 시간 확인
  checkTokenExpiration: () => {
    const token = get().token;
    if (!token || !isTokenValid(token)) {
      get().onLogout();
      return;
    }

    // 타이머 중복 실행 방지
    const { timerId } = get();
    if (timerId) {
      clearTimeout(timerId);
    }

    // 새로운 타이머 설정
    const newTimerId = setTimeout(() => {
      get().onLogout();
    }, getRemainingTime(token));

    set({ timerId: newTimerId });
  },
}));

export default useAuthStore;
