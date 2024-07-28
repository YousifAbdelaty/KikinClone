/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#122315",
        neongreen: "#55dd4a",
        offwhite: "#f3ede4",
        border: "#12231500",
      },
      fontFamily: {
        Roboto: "Roboto",
      },
      backgroundImage:{
        hero:"url('https://cdn.prod.website-files.com/635273ea37c256ef2835d522/654a36b6f78e92b5209148af_Kikin_Illustrations_Scene_01_RGB%202.svg')"
      }
    },
  },
  plugins: [],
};
