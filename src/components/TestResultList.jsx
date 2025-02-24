import { useQuery } from "@tanstack/react-query";
import { getTestResults } from "../api/testResults";
import TestResultItem from "./TestResultItem";

const TestResultList = () => {
  const {
    data: testResults,
    isPending: isResultsPending,
    isError: isResultsError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  if (isResultsPending) return <div>Loading...</div>;
  if (isResultsError) return <div>Error occurred...</div>;

  return (
    <div className="space-y-5">
      {testResults.map((result) => {
        return <TestResultItem key={result.id} result={result} />;
      })}
    </div>
  );
};

export default TestResultList;
