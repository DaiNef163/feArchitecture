/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Đảm bảo Tailwind quét đúng các file này
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
