import { Link } from "react-router-dom";
import ProfileModal from "./ProfileModal";
import useAuthStore from "../zustand/authStore";
import { getRemainingTime } from "../utils/decodingToken";
import { useEffect, useState } from "react";
import { formatTime } from "../utils/formatTime";

const Layout = () => {
  const { isAuthenticated, onLogout } = useAuthStore((state) => state);
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  useEffect(() => {
    if (!isAuthenticated) return;
    const updateRemainingTime = () => {
      setRemainingTime(getRemainingTime());
    };
    updateRemainingTime();
    const interval = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  return (
    <>
      <div className="flex justify-between items-center p-3 pl-10 h-15 bg-slate-100 shadow-md text-xl font-semibold">
        <Link to="/">
          <button className="button-rounded">홈</button>
        </Link>
        <div className="flex gap-2">
          {isAuthenticated && (
            <p className="p-1">남은 시간: {formatTime(remainingTime)}</p>
          )}
          {isAuthenticated && <ProfileModal />}
          {isAuthenticated ? (
            <button className="button-sky" onClick={onLogout}>
              로그아웃
            </button>
          ) : (
            <Link to="/login">
              <button className="button-sky">로그인</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout;
