import { useCallback, useEffect, useState } from "react";
import { getUserProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";

const useMyNickname = () => {
  const { token } = useAuthStore();
  const [nickname, setNickname] = useState("");

  // 최신 닉네임 업데이트 (함수 재사용 - 메모이제이션)
  const refreshNickname = useCallback(() => {
    if (!token) return;

    getUserProfile(token)
      .then((data) => setNickname(data.nickname))
      .catch((error) => console.error("프로필 불러오기 실패:", error));
  }, [token]);

  useEffect(() => {
    refreshNickname();
  }, [refreshNickname]);

  return { nickname, refreshNickname };
};

export default useMyNickname;
