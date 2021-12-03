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
      animation:{
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'textAnimation': 'textAnimation 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {

          '0%, 100%': { transform: 'scale(1.05) ' },

          '50%': { transform: 'scale(1)' },

        },
        textAnimation: {

          '0%, 100%': { transform: 'rotate(-3deg)' },

          '50%': { transform: 'rotate(3deg)' },

        }
      }
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      maxHeight: ['focus'],
      divideColor: ['group-hover'],
    },
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
