import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex justify-between items-center p-3 pl-10 bg-slate-100 shadow-md text-xl font-semibold">
        <Link to="/" className="text-sky-700 text-xl font-bold">
          홈
        </Link>
        <Link to="/login">
          <button className="button-sky">로그인</button>
        </Link>
      </div>
    </>
  );
};

export default Layout;
