import { useEffect, useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );
  const [allAnswered, setAllAnswered] = useState(false);

  useEffect(() => {
    const isAllAnswered = answers.every(
      (answer) => answer.answer !== "" && answer.type !== ""
    );
    setAllAnswered(isAllAnswered);
  }, [answers]);

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg">
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold text-lg mb-3">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block p-3 border rounded-lg cursor-pointer transition-colors duration-300 ${
                  answers[index]?.answer === option ? "bg-gray-100" : ""
                } hover:bg-gray-100`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index]?.answer === option}
                  onChange={() => handleChange(index, option)}
                  className="mr-2 text-primary-color"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="submit"
        className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
          allAnswered
            ? "bg-primary text-white hover:bg-red-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!allAnswered}
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
