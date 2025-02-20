// import { useEffect } from "react";
import AuthForm from "../components/AuthForm";
// import { login, getUserProfile } from "../api/auth";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const handleLogin = async (formData) => {
    // try {
    // } catch (error) {
    //   alert("로그인에 실패했습니다. 다시 시도해주세요.");
    // }
  };

  return (
    <div className="centered-container bg-bgColor">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="h1 w-full">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p className="mt-7">
            계정이 없으신가요?{" "}
            <Link to="/signup" className="text-primary font-semibold">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
