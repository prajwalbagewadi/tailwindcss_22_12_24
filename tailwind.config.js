/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./02_loginV2/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "japan-street": "url('./IMG/Japan Street illustration.jpg')",
      },
    },
  },
  plugins: [],
};
