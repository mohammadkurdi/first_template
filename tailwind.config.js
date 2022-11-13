/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      dm: ['DM Sans']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        violet: '#1E0E62',
        blueNew: '#482BE7',
        darkBlue: '#18009B',
        // darkBlue: 'hsl(228, 39%, 23%)',
        // darkGrayishBlue: 'hsl(227, 12%, 61%)',
        // veryDarkBlue: 'hsl(223, 12%, 13%)',
        // veryPaleRed: 'hsl(13, 100%, 96%)',
        // veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}