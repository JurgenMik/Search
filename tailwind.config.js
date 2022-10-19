const defaultTheme = require ('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['League Spartan', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}