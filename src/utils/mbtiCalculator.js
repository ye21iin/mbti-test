import { questions } from "../data/questions";

export const calculateMBTI = (answers) => {
  // 각 MBTI 유형에 대한 점수 초기화
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  // answers 배열을 순회하며 점수 누적
  answers.forEach((answerObj, index) => {
    // 질문의 type ("E/I" 등)을 "/" 기준으로 분리
    const [option1, option2] = answerObj.type.split("/");
    // 선택한 옵션이 질문의 options 배열에서 몇 번째에 위치하는지 확인
    const question = questions[index];
    const selectedIndex = question.options.indexOf(answerObj.answer);

    if (selectedIndex === 0) scores[option1]++; // 선택한 옵션이 0번째에 위치하면 option1에 점수 추가
    if (selectedIndex === 1) scores[option2]++; // 선택한 옵션이 1번째에 위치하면 option2에 점수 추가
  });

  // 점수를 비교해 최종 MBTI 유형 계산
  const result = `${scores.E >= scores.I ? "E" : "I"}${
    scores.S >= scores.N ? "S" : "N"
  }${scores.T >= scores.F ? "T" : "F"}${scores.J >= scores.P ? "J" : "P"}`;

  return result;
};
