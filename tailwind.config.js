const danger = "#EF4444";
const primary = "#3B82F6";

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary,
      danger,
    }),

    extend: {
      colors: {
        danger,
        primary,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
