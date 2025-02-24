import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import useAuthStore from "../zustand/authStore";

const Home = () => {
  // // 로컬스토리지에 토큰 정보가 있으면 로그인 상태 설정
  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   if (token) {
  //     useAuthStore.getState().onLogin(token);
  //   }
  // }, []);

  const initializeAuthState = useAuthStore(
    (state) => state.initializeAuthState
  );

  // 앱 로드 시 Zustand 상태 초기화
  useEffect(() => {
    initializeAuthState();
  }, [initializeAuthState]);

  // console.log(useAuthStore((state) => state.isAuthenticated));
  return (
    <>
      {/* <Layout /> */}
      <div className="centered-container">
        <h1 className="h1">
          무료&nbsp;
          <span className="relative">
            <span
              className="absolute -inset-1 block -skew-y-3 bg-slate-800"
              aria-hidden="true"
            ></span>
            <span className="relative text-white">성격</span>
          </span>
          &nbsp;테스트
        </h1>
        <p className="p mt-2 mb-10">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-50 shadow-lg rounded-lg p-6">
            <h2 className="h2">성격 유형 검사</h2>
            <p className="p mb-3">
              자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을
              미치는지 알아보세요.
            </p>
          </div>
          <div className="bg-slate-50 shadow-lg rounded-lg p-6">
            <h2 className="h2">성격 유형 이해</h2>
            <p className="p mb-3">
              다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
            </p>
          </div>
          <div className="bg-slate-50 shadow-lg rounded-lg p-6">
            <h2 className="h2">팀 평가</h2>
            <p className="p mb-3">
              팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
              배워보세요.
            </p>
          </div>
        </div>
        <Link to="/test">
          <button className="button-blue">내 성격 알아보러 가기</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
