import { useState } from "react";
import { login } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import useAuthStore from "../zustand/authStore";
import Toast from "../components/Toast";

const Login = () => {
  const navigate = useNavigate();
  const { onLogin, checkTokenExpiration } = useAuthStore((state) => state);
  const [showToast, setShowToast] = useState(false);

  const handleLogin = async (formData) => {
    try {
      const { accessToken } = await login(formData);
      onLogin(accessToken);
      checkTokenExpiration();
      navigate("/");
    } catch (error) {
      setShowToast(true);
      throw new Error(error);
    }
  };

  return (
    <>
      {showToast && (
        <Toast
          message="로그인에 실패했습니다. 다시 시도해주세요."
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
      <div className="centered-container bg-bgColor">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="h1 w-full">로그인</h1>
          <AuthForm mode="login" onSubmit={handleLogin} />
          <div>
            <p className="mt-7">
              계정이 없으신가요?&nbsp;
              <Link to="/signup" className="text-primary font-semibold">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
