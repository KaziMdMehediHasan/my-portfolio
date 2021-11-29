module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'custom-red' : '#ba1a32',
        'react' : '#61DBFB',
        'node' : '#3C873A',
        'html' : '#F06529',
        'css' : '#264de4',
        'bootstrap' : 'purple',
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      maxHeight: ['focus'],
      divideColor: ['group-hover'],
    },
  },
  plugins: [],
}
