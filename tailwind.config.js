/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      borderButtonColor: {
        "custom-white": "#ececec",
      },
      boxShadow: {
        custom:
          "0px 0px 10px 0px rgba(233, 223, 255, 0.3), 0px 0px 40px 0px rgba(187, 155, 255, 0.15), inset 0px 0.5px 0px 0px rgba(255, 255, 255, 0.5)",
      },
    },
    colors: {
      white: "#ececec",
      white_0: "rgba(255,255,255,0)",
      white_30: "rgba(255, 255, 255, 0.3)",
      white_65: "rgba(236, 236, 236, 0.65)",
      text_grey: "#939393",
      blue_dark: "#0B081CFF",
      blue_dark_middle: "rgba(11,8,28,0.5)",
      custom: {
        "gradient-start": "#160D2B",
        "gradient-end": "#0C0222",
      },
    },
    backgroundImage: {
      "custom-gradient": "linear-gradient(to bottom, var(--tw-gradient-stops))",
    },
    screens: {
      sm: "640px",
      md: "768px",
      md2: "850px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".button-border": {
          border: `1px solid ${theme("borderButtonColor.custom-white")}`,
          borderRadius: "50px",
        },
        ".title-pill": {
          borderRadius: "61.91px",
          border: `1.24px solid ${theme("colors.white_30")}`,
          padding: "9.91px 19.81px 9.91px 19.81px",
          color: theme("colors.white"),
          textAlign: "center",
        },
        ".title-content": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: theme("colors.white"),
          textAlign: "center",
          marginBottom: "24px",
        },
        ".text-mask-gradient": {
          "--mask-image":
            "linear-gradient(to bottom right, white, transparent)",
          color: "white",
          "mask-image": "var(--mask-image)",
          "-webkit-mask-image": "var(--mask-image)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
