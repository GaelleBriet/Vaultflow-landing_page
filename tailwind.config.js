/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      borderButtonColor: {
        "custom-white": "#ececec",
      },
    },
    colors: {
      white: "#ececec",
      blue_dark: "#0B081CFF",
      blue_dark_middle: "rgba(11,8,28,0.5)",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".button-border": {
          border: `1px solid ${theme("borderButtonColor.custom-white")}`,
          borderRadius: "50px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
