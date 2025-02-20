import { register } from "../api/auth";
import AuthForm from "../components/AuthForm";
// import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      await register(formData);
      navigate("/login");
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      throw new Error(error);
    }
  };

  return (
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
  );
};

export default Signup;
