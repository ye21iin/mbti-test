// import { create } from "zustand";
// import { getRemainingTime, isTokenValid } from "../utils/decodingToken";

// const useAuthStore = create((set) => ({
//   isAuthenticated: !!localStorage.getItem("isAuthenticated"),
//   token: localStorage.getItem("token") || null,
//   timerId: null,

//   onLogin: (token) => {
//     localStorage.setItem("accessToken", token);
//     set({ token, isAuthenticated: true });
//     useAuthStore.getState().checkTokenExpiration();
//   },

//   onLogout: () => {
//     localStorage.removeItem("accessToken");
//     set({ token: null, isAuthenticated: false });
//     // timer 초기화
//     const { timerId } = useAuthStore.getState();
//     if (timerId) {
//       clearTimeout(timerId);
//       set({ timerId: null });
//     }
//     alert("로그아웃되었습니다.");
//   },

//   checkTokenExpiration: () => {
//     if (!isTokenValid()) {
//       useAuthStore.getState().onLogout();
//       return;
//     }
//     // timer 중복실행 방지
//     const { timerId } = useAuthStore.getState();
//     if (timerId) {
//       clearTimeout(timerId);
//     }
//     // timer 세팅
//     const newTimerId = setTimeout(() => {
//       useAuthStore.getState().onLogout();
//     }, getRemainingTime());
//     set({ timerId: newTimerId });
//   },
// }));

// export default useAuthStore;

import { create } from "zustand";
import { getRemainingTime, isTokenValid } from "../utils/decodingToken";

const useAuthStore = create((set, get) => ({
  isAuthenticated: false, // 초기값은 false
  token: null, // 초기값은 null
  timerId: null,

  // 초기화 함수: 페이지 로드 시 토큰 유효성 검사
  initializeAuthState: () => {
    const token = localStorage.getItem("accessToken");
    if (token && isTokenValid(token)) {
      set({ token, isAuthenticated: true });
      get().checkTokenExpiration();
    }
    // else {
    //   get().onLogout();
    // }
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
    alert("로그아웃되었습니다.");
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
