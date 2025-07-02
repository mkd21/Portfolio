/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
    screens: {
      'xs320': '320px',  // extra small
      "xs360" : "360px",
      "xs375" : "375px",
      "xs390" : "390px",
      "xs393" : "393px",
      'xs400': '400px',
      "xs412" : "412px",
      ...require('tailwindcss/defaultTheme').screens,
    }
  },
  plugins: [],
}

