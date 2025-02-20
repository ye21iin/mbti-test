import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <>
      <Layout />
      <div className="centered-container">
        <h1 className="h1">무료 성격 테스트</h1>
        <p className="p mt-4 mb-8">
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
