const AuthForm = () => {
  return (
    <form className="flex flex-col">
      <input type="text" placeholder="아이디" className="input mb-2" />
      <input type="password" placeholder="비밀번호" className="input" />
      <button className="mt-4 bg-blue-500 shadow-lg shadow-blue-500/50 text-white hover:bg-blue-600 py-3 px-7 rounded">
        로그인
      </button>
    </form>
  );
};

export default AuthForm;
