/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      md:'20px',
      lg:"40px",
      xl:"40px"

    },
    extend: {
      colors:{
        "white":"#FFFFFF",
        "dark-white":"#D9D9D9",
        "blue-bg":"#186BAD",
        "ash":"#F2F1F1",
        "trans-blue":"rgba(24,107,173,0.5)",
        "link-blue":"#186BAD",
        "hover-blue":"#509CDB",
      }
    },
  },
  plugins: [],
}

