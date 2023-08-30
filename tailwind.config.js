module.exports = {
  mode: "jit",
  purge: [
    
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    "./public/**/*.html",
],
  plugins: [require("@tailwindcss/line-clamp"),require('flowbite/plugin')],
};