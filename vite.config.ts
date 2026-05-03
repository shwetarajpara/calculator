// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

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
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Calculator App',
        short_name: 'Calculator',
        description: 'Simple calculator PWA',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/calc.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/calc.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
}