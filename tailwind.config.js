/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:'#122315',
        neongreen:'#55dd4a',
        offwhite:'#f3ede4',
        border:'#12231500'
        ,
      }
    },
  },
  plugins: [],
}