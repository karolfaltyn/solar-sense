/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: "1300px",
      },
    },
    extend: {
      colors: {
        finalBackground: "#F0F6F7",
        background: "#FCFCFC",
        gray: "#2A2A2A",
        darkGray: "#161616",

        blue: "#63CFEA",
        darkBlue: "#009CD1",
        green: "#79E381",
        darkGreen: "#48C353",
        yellow: "#F5DF41",
        darkYellow: "#F0BF1E",
        red: "#9C0000",
        darkRed: "#4B0803",
      },
    },
  },
  plugins: [],
};
