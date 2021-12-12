const colors = require('tailwindcss/colors')

module.exports = {
  content: [ './src/pages/*.{js,jsx,ts,tsx,vue}/',
'./src/components/*/*.{js,jsx,ts,tsx,vue}',
'./src/components/*.{js,jsx,ts,tsx,vue}' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        tilt: "tilt 10s infinite linear"
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        }
      },
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
        'profil-bubble': "url('../src/images/logo_transparent.png')",
       }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
