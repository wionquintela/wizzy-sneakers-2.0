/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        cardDesktop: "300px",
        cardMobile: "320px",
        card: "300px",
      },
    },
  },
  plugins: [],
};
