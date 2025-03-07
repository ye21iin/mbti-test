import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";
import { mbtiDescriptions } from "../data/mbtiDescriptions";
import { getUserProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";

const TestResultItem = ({ result }) => {
  const { token } = useAuthStore();
  const queryClient = useQueryClient();

  const { data: id } = useQuery({
    queryKey: ["loginUser"],
    queryFn: async () => {
      const response = await getUserProfile(token);
      return response.id;
    },
  });

  const { data: nickname, isLoading: isNicknameLoading } = useQuery({
    queryKey: ["userProfile", result.userId],
    queryFn: async () => {
      const response = await getUserProfile(token, result.userId);
      return response.nickname;
    },
  });

  // 공개 여부 변경 API 호출
  const { mutate: toggleVisibility } = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: queryClient.invalidateQueries(["testResults"]),
  });

  // 삭제 API 호출
  const { mutate: deleteResult } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: queryClient.invalidateQueries(["testResults"]),
  });

  const handleVisibilityToggle = () => {
    toggleVisibility({ id: result.id, visibility: !result.visibility });
  };

  const handleDelete = () => {
    deleteResult(result.id);
  };

  return (
    <div className="bg-blue-50 rounded-lg p-8 max-w-lg text-center w-[90%] h-full overflow-y-auto gap">
      <div className="flex justify-between">
        <h2 className="h2">{isNicknameLoading ? "Loading..." : nickname}</h2>
        <span>{result.timestamp}</span>
      </div>
      <p className="h2 font-bold">{result.mbtiResult}</p>
      <p className="mb-5 leading-6 first-line:text-xl">
        {mbtiDescriptions[result.mbtiResult]
          ? mbtiDescriptions[result.mbtiResult].substr(6)
          : "설명이 없습니다."}
      </p>
      {result.userId === id && (
        <div className="flex justify-end gap-1">
          <button
            className="button-custom-blue"
            onClick={handleVisibilityToggle}
          >
            {result.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button className="button-custom-red" onClick={handleDelete}>
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
