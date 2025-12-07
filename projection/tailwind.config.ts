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
    height: {
      '1/3': '33.33%',
      '21/3': '63.66%',
    },
    

  },
  plugins: [],
};
