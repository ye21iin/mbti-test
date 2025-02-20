/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        bgColor: "#f1f5f9",
      },
    },
  },
  plugins: [],
};
