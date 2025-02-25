import TestResultList from "../components/TestResultList";

const Results = () => {
  return (
    <div className=" flex flex-col items-center bg-slate-50 min-h-screen w-screen">
      <div className="md:w-2/3 w-[110%] max-w-3xl mt-5 pt-10 flex flex-col items-center justify-center gap-3 bg-white rounded-3xl shadow-lg min-h-[110%]">
        <h1 className="text-3xl font-bold mb-6">
          <span className="relative">
            <span
              className="absolute -inset-1 block -skew-y-3 bg-slate-800"
              aria-hidden="true"
            ></span>
            <span className="relative text-white">MBTI</span>
          </span>
          &nbsp; 담벼락
        </h1>
        <TestResultList />
      </div>
    </div>
  );
};

export default Results;
