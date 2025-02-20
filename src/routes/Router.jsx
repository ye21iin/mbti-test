import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Results from "../pages/Results";
import Test from "../pages/Test";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
