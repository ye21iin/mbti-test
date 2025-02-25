import { useState } from "react";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { useNavigate } from "react-router-dom";
import { mbtiDescriptions } from "../data/mbtiDescriptions";
import { createTestResult } from "../api/testResults";
import { getUserProfile } from "../api/auth";
import TestForm from "../components/TestForm";

const Test = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    const token = localStorage.getItem("accessToken");
    const mbtiResult = calculateMBTI(answers);

    try {
      const userProfile = await getUserProfile(token);
      const userId = userProfile.id;
      const resultData = {
        userId,
        mbtiResult,
        timestamp: new Date().toLocaleString(),
        visibility: false,
      };
      await createTestResult(resultData);
      setResult(mbtiResult);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "🤾🏻MBTI 테스트 결과🧘🏻",
          text: `나의 MBTI 결과는 ${result}입니다!🐥`,
          url: window.location.href,
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold mb-6">MBTI 테스트</h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6">테스트 결과: {result}</h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <div className="grid gap-2">
              <button onClick={handleShare} className="button-custom-blue">
                공유하기
              </button>
              <button
                onClick={handleNavigateToResults}
                className="button-custom-red"
              >
                결과 페이지로 이동하기
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Test;
