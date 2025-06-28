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
      "xs60" : "360px",
      'xs400': '400px', // custom breakpoint
      ...require('tailwindcss/defaultTheme').screens,
    }
  },
  plugins: [],
}

