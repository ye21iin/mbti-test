import { Link, Outlet } from "react-router-dom";
import ProfileModal from "./ProfileModal";
import useAuthStore from "../zustand/authStore";
import { getRemainingTime } from "../utils/decodingToken";
import { useEffect, useState } from "react";
import { formatTime } from "../utils/formatTime";
import { MdOutlineTimer } from "react-icons/md";

const Layout = () => {
  const { isAuthenticated, onLogout } = useAuthStore((state) => state);
  const [remainingTime, setRemainingTime] = useState(() => getRemainingTime()); // lazy initial state: 초기 렌더링 시점에만 값 계산

  useEffect(() => {
    if (!isAuthenticated) return;
    setRemainingTime(getRemainingTime()); // 초기값 보정
    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        const newTime = getRemainingTime();
        return prev !== newTime ? newTime : prev; // 불필요한 렌더링 방지
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isAuthenticated]);

  return (
    <>
      <div className="flex justify-between items-center p-3 pl-5 h-15 bg-slate-100 shadow-md text-xl font-semibold">
        <Link to="/">
          <button className="button-rounded">홈</button>
        </Link>
        <div className="flex gap-2">
          {isAuthenticated && (
            <p className=" pt-2 text-sm ml-1 mr-1 inline-flex gap-1">
              <MdOutlineTimer size={20} /> {formatTime(remainingTime)}
            </p>
          )}
          {isAuthenticated && <ProfileModal />}
          {isAuthenticated ? (
            <button className="button-slate" onClick={onLogout}>
              로그아웃
            </button>
          ) : (
            <Link to="/login">
              <button className="button-sky">로그인</button>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
