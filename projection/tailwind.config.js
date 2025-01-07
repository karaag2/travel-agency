/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        MaPolice: ["MaPolice"],
        MaPoliceNorm: ["MaPoliceNorm"],
      },
      colors: {
        'ma-blue': '#007bff',
    },
    

  },
  plugins: [],
};
