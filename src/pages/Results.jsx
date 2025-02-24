import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResults";

const Results = () => {
  const {
    data: testResults,
    isPending: isResultsPending,
    isError: isResultsError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  if (isResultsPending) return <div>Loading...</div>;
  if (isResultsError) return <div>Error occur...</div>;

  return (
    <div className="w-full mt-10 flex flex-col items-center justify-center gap-3">
      <h1 className="text-3xl font-bold mb-6">테스트 결과</h1>
      {testResults.map((result) => {
        return (
          <div
            className="bg-blue-50 rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto"
            key={result.id}
          >
            <p>{result.userId}</p>
            <p>{result.mbtiResult}</p>
            <p>{result.timestamp}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
