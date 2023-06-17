/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'def': '861px',
      }
    },
    colors: {
      dred: '#A60808',
      lblack: '#161517'
    },
    fontFamily:{
      dancing: ["Dancing Script", "cursive"],
      poppins: ['Poppins', "sans-serif"],
      inter: ["Inter", "sans-serif" ]
    },
    fontSize: {
      twentyFour: "24px",
      def: "64px"
    },
    width: {
      'def': '490px',
    }
  },
  plugins: [],
}

