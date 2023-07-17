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
        "contdef": "1496px"
      }
    },
    colors: {
      dred: '#A60808',
      dredLight: "#e33636",
      lblack: '#161517'
    },
    fontFamily:{
      dancing: ["Dancing Script", "cursive"],
      poppins: ['Poppins', "sans-serif"],
      inter: ["Inter", "sans-serif" ],
      roboto: ["Roboto", "sans-serif"]
    },
    fontSize: {
      twentyFour: "24px",
      def: "64px"
    },
    width: {
      'def': '490px',
      'contdef': "1440px",
      'full': '100%'
    }
  },
  plugins: [],
}

