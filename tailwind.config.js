/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-brown-orange": "linear-gradient(to top right, #8B4513, #FFA500)",
        "gradient-orange": "linear-gradient(to top right, #FDBA74, #FB923C, #F97316)", // This matches the bg-gradient-to-tr from-orange-200 via-orange-300 to-orange-400
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [""],
  },
};