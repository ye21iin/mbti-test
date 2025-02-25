import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthForm from "../components/AuthForm";
import Toast from "../components/Toast";

const Signup = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const handleSignup = async (formData) => {
    try {
      const response = await register(formData); // 인증 서버 회원가입 요청
      response.success && navigate("/login");
    } catch (error) {
      setShowToast(true);
      throw new Error(error);
    }
  };

  return (
    <>
      {showToast && (
        <Toast
          message="회원가입에 실패했습니다."
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
      <div className="centered-container bg-bgColor">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="h1">회원가입</h1>
          <AuthForm mode="signup" onSubmit={handleSignup} />
          <div>
            <p className="mt-7">
              이미 계정이 있으신가요?&nbsp;
              <Link to="/login" className="text-primary font-semibold">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
