# MBTI 성격 유형 테스트

**MBTI TEST**는 사용자가 로그인하여 성격 유형 검사를 진행하고, 결과를 저장 및 관리할 수 있는 웹 애플리케이션입니다.
JWT 인증, REST API 통신, Axios와 TanStack Query를 활용하여 **인증**과 **비동기** 데이터 관리를 구현한 개인 프로젝트입니다.

## 🔗 프로젝트 구조

### 🎱 주요 기능

- 회원가입/로그인 : 계정을 생성하고, 로그인할 수 있는 기능.
- MBTI 테스트 : 제공된 질문의 응답을 토대로 성격 유형을 계산하여 결과를 제공.
- 결과 저장 : 테스트 결과를 json-server에 저장하고, 결과를 불러와 표시.
- 결과 리스트 : 사용자가 이전에 진행한 테스트 결과 확인, 공개 여부 변경 및 삭제 기능.

- JWT 인증 : 로그인 상태를 유지하고, 인증된 사용자만 접근할 수 있도록 리다이렉트.
- 반응형 UI : Tailwind 활용 및 반응형 UI 구현.
- 공유 기능 : 테스트 결과를 공유할 수 있는 기능 추가.
- 로컬 스토리지 : 새로고침 시 로그인 상태가 유지되도록 localStorage 사용.

### 🛠️ 기술 스택

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React Router](https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=react-router&logoColor=white)

![Zustand](https://img.shields.io/badge/zustand-orange?style=flat-square&logo=zustand&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanstackQuery-FF4154?style=flat-square&logo=TanstackQuery&logoColor=white)

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)

![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![React Portal](https://img.shields.io/badge/ReactPortal-000000?style=flat-square&logo=react&logoColor=white)
![React Icons](https://img.shields.io/badge/ReactIcons-000000?style=flat-square&logo=react&logoColor=white)

### 🌠 미리보기

![2025-02-2512 13 49-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/8f16b4d8-6f7e-4d6f-95a5-0b44c115802a)

### 🌧️ 개발 기록: TROUBLE-SHOOTING

<h4>0️⃣ [React/MBTI] react-dom Portal로 모달 만들기 👉🏻 <a href="https://velog.io/@ye21iin/%ED%8F%AC%ED%83%88">링크</a></h4>
<h4>1️⃣ [React/MBTI] POST서버통신 오류: ERR_NAME_NOT_RESOLVED  👉🏻 <a href="https://velog.io/@ye21iin/ReactMBTI-POST%EC%84%9C%EB%B2%84%ED%86%B5%EC%8B%A0-%EC%98%A4%EB%A5%98-ERRNAMENOTRESOLVED">링크</a></h4>
<h4>2️⃣ [React/MBTI] JSON Server 500 에러 발생: 원인 분석 및 해결 방법  👉🏻 <a href="https://velog.io/@ye21iin/ReactMBTI-JSON-Server-500-%EC%97%90%EB%9F%AC-%EB%B0%9C%EC%83%9D-%EC%9B%90%EC%9D%B8-%EB%B6%84%EC%84%9D-%EB%B0%8F-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95">링크</a></h4>
<h4>3️⃣ [React/MBTI] TypeError: relativeURL.replace is not a function  👉🏻 <a href="https://velog.io/@ye21iin/ReactMBTI-TypeError-relativeURL.replace-is-not-a-function">링크</a></h4>

### ☑️ 프로젝트 트리

```
mbti-test
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package.json
├─ postcss.config.js
├─ src
│  ├─ App.jsx
│  ├─ api
│  │  ├─ auth.js // 인증 관련 API 요청
│  │  ├─ configInstance.js // # Axios 인스턴스 설정
│  │  └─ testResults.js // 테스트 결과 API 요청
│  ├─ components
│  │  ├─ AuthForm.jsx // 로그인/회원가입 폼
│  │  ├─ EditNickname.jsx // 닉네임 수정 폼
│  │  ├─ Layout.jsx // 공통 레이아웃
│  │  ├─ ProfileModal.jsx // 프로필 정보 모달
│  │  ├─ TestForm.jsx // MBTI 테스트 질문 폼
│  │  ├─ TestResultItem.jsx // 단일 MBTI 테스트 결과
│  │  ├─ TestResultList.jsx // 테스트 결과 목록
│  │  └─ Toast.jsx // 알림 메시지
│  ├─ data
│  │  ├─ mbtiDescriptions.js
│  │  └─ questions.js
│  ├─ hooks
│  │  └─ useMyNickname.js // 사용자 닉네임 관리
│  ├─ index.css // 전역 CSS 파일
│  ├─ main.jsx // # 애플리케이션 엔트리 포인트
│  ├─ pages
│  │  ├─ Home.jsx
│  │  ├─ Login.jsx
│  │  ├─ Results.jsx // MBTI 결과 페이지 컴포넌트
│  │  ├─ Signup.jsx
│  │  └─ Test.jsx // MBTI 테스트 페이지 컴포넌트
│  ├─ routes
│  │  └─ Router.jsx // 애플리케이션 라우팅 설정
│  ├─ utils
│  │  ├─ decodingToken.js // JWT 토큰 디코딩
│  │  ├─ formatTime.js // 시간 포맷팅
│  │  └─ mbtiCalculator.js // MBTI 계산 및 결과처리
│  └─ zustand
│     └─ authStore.js
├─ tailwind.config.js
├─ vite.config.js
└─ yarn.lock

```
