import TestResultList from "../components/TestResultList";

const Results = () => {
  return (
    <div className=" flex flex-col items-center bg-slate-50">
      <div className="w-2/3 mt-5 pt-10 flex flex-col items-center justify-center gap-3 bg-white rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">테스트 결과</h1>
        <TestResultList />
      </div>
    </div>
  );
};

export default Results;
