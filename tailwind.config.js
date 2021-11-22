module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bismark: {
          DEFAULT: "#45677D",
          50: "#D6E1E8",
          100: "#C4D4DE",
          200: "#A0BACA",
          300: "#7BA0B7",
          400: "#5986A1",
          500: "#45677D",
          600: "#314959",
          700: "#1D2B35",
          800: "#090E10",
          900: "#000000",
        },
        "faded-jade": {
          DEFAULT: "#457D79",
          50: "#D6E8E7",
          100: "#C4DEDC",
          200: "#A0CAC7",
          300: "#7BB7B2",
          400: "#59A19C",
          500: "#457D79",
          600: "#315956",
          700: "#1D3533",
          800: "#091010",
          900: "#000000",
        },
        affair: {
          DEFAULT: "#72457D",
          50: "#E5D6E8",
          100: "#D9C4DE",
          200: "#C2A0CA",
          300: "#AB7BB7",
          400: "#9359A1",
          500: "#72457D",
          600: "#513159",
          700: "#301D35",
          800: "#0F0910",
          900: "#000000",
        },
      },
      height: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
