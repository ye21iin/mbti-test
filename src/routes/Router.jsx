import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import Results from "../pages/Results";
import Test from "../pages/Test";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import useAuthStore from "../zustand/authStore";
import Layout from "../components/Layout";

const PublicRoute = () => {
  const { isAuthenticated } = useAuthStore();
  return <>{isAuthenticated ? <Navigate to="/" /> : <Outlet />}</>;
};

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthStore();
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/test" element={<Test />} />
            <Route path="/results" element={<Results />} />
          </Route>
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
