import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(100vh)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(-10vh)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}