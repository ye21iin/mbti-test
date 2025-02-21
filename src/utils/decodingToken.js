// 토큰 만료 시간 추출
export const getTokenExpiration = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000; // UNIX timestamp → ms 변환
  } catch (error) {
    console.error("⚠️ 토큰 디코딩 오류:", error);
    return null;
  }
};

// 토큰 유효 시간
export const getRemainingTime = () => {
  const expTime = getTokenExpiration();
  if (!expTime) return null;

  const remainingTime = expTime - Date.now();
  return remainingTime > 0 ? remainingTime : 0;
};

// 토큰 유효성 검사
export const isTokenValid = () => getRemainingTime() > 0;
