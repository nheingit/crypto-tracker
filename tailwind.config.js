module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'icon': '0 20px 0 0 #1EB980'
      },
      fontFamily: {
        robotoCondensed: ["roboto-condensed", "sans"],
        eczar: ["eczar", "sans-serif"],
      },
      colors: {
        green: {
          primary: '#1EB980'
        },
        gray: {
          text: "#363636"
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')
  ],
}
