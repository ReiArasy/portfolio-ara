/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary: '#14b8a6',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};


// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//     container: {
//       center: true,
//       padding: '0px',
//     },
//     extend: {
//       colors:{
//                 primary: '#14b8a6',
//                 dark: '#0f172a',
//       },
//       screens: {
//                 '2xl': '1320px',
//       },
//     },
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

