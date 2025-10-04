/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(1.2)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1.2)' },
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
        rotate: 'rotate 8s linear infinite',
      },
    },
  },
  plugins: [],
}
