import { Link } from "react-router-dom";
import ProfileModal from "./ProfileModal";
import useAuthStore from "../zustand/authStore";

const Layout = () => {
  const { isAuthenticated, onLogout } = useAuthStore((state) => state);
  console.log("현재 로그인 상태", isAuthenticated);
  return (
    <>
      <div className="flex justify-between items-center p-3 pl-10 bg-slate-100 shadow-md text-xl font-semibold">
        <Link to="/">
          <button className="button-rounded">홈</button>
        </Link>
        <div className="flex gap-2">
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
