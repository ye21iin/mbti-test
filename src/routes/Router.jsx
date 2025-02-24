import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Results from "../pages/Results";
import Test from "../pages/Test";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import useAuthStore from "../zustand/authStore";
import Layout from "../components/Layout";
import { useEffect } from "react";

const Router = () => {
  const PublicRoute = ({ element: Element }) => {
    const { isAuthenticated, initializeAuthState } = useAuthStore();

    // Zustand 상태 동기화
    useEffect(() => {
      initializeAuthState();
    }, [initializeAuthState]);

    // 로그인한 사용자는 홈으로 리다이렉트
    if (isAuthenticated) {
      return <Navigate to="/" />;
    }

    // 로그인하지 않은 사용자는 해당 페이지 렌더링
    return <Element />;
  };

  const PrivateRoute = ({ element: Element }) => {
    const { isAuthenticated, initializeAuthState } = useAuthStore();

    // Zustand 상태 동기화
    useEffect(() => {
      initializeAuthState();
    }, [initializeAuthState]);

    // 로그인하지 않은 사용자는 로그인 페이지로 리다이렉트
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    // 로그인한 사용자는 해당 페이지 렌더링
    return <Element />;
  };

  // const { isAuthenticated } = useAuthStore((state) => state);

  // // PrivateRoute : 로그인이 필요한 페이지에 접근할 수 있도록 하는 컴포넌트
  // // 로그인이 되어있지 않은 사용자는 login 페이지로 리다이렉트
  // const PrivateRoute = ({ element: Element, ...rest }) => {
  //   return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
  // };

  // // PublicRoute : 로그인이 필요없는 페이지에 접근할 수 있도록 하는 컴포넌트
  // // 로그인이 되어있는 사용자는 홈으로 리다이렉트
  // const PublicRoute = ({ element: Element, ...rest }) => {
  //   console.log("PublicRoute - isAuthenticated:", isAuthenticated);
  //   return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/" />;
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<PrivateRoute element={Test} />} />
          <Route path="/results" element={<PrivateRoute element={Results} />} />
        </Route>
        <Route path="/signup" element={<PublicRoute element={Signup} />} />
        <Route path="/login" element={<PublicRoute element={Login} />} />
      </Routes>
      ø
    </BrowserRouter>
  );
};

export default Router;
