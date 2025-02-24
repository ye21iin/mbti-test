import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";

import { useNavigate } from "react-router-dom";
import { mbtiDescriptions } from "../data/mbtiDescriptions";
import { createTestResult } from "../api/testResults";
import { getUserProfile } from "../api/auth";

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
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Test;
