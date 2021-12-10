const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        'tertier': '#508991',
        'secondary' : '#74B3CE',
        'primary': '#364f6b',
      },
      fontFamily: {
        'moderne': ['Moderne Sans', 'sans-serif'],
        'work': ['Work Sans', 'sans-serif'],
        'jetbrains': ['JetBrainsMono', 'sans-serif'],
       },
      backgroundImage: {
        'profil-bubble': "url('./images/logo.png')",
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
