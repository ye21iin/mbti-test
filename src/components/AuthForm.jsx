import { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="input"
        type="text"
        name="id"
        value={formData.id}
        onChange={(e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        }}
        placeholder="아이디"
        required
      />
      <input
        className="input"
        type="password"
        name="password"
        value={formData.password}
        onChange={(e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        }}
        placeholder="비밀번호"
        required
      />
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={(e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
          }}
          placeholder="닉네임"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      )}
      <button type="submit" className="button-blue">
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;
