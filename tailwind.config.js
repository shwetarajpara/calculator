/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '15': '3.75rem',
      },
      height: {
        '15': '3.75rem',
      },
      animation: {
        float: "float 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0px, 0px)" },
          "25%": { transform: "translate(80px, -60px)" },
          "50%": { transform: "translate(-60px, 80px)" },
          "75%": { transform: "translate(60px, 40px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
      },
    },
  },
  plugins: [],
}