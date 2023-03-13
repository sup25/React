/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}',
    './src/**/*.{js,jsx}', ,],
  theme: {
    extend: {},
    fontFamily: {
      Righteous: ['Righteous']
    },
    backgroundImage: {
      'login': "url('./login.jpg')",
      'logo': "url('./logo.jpg')",
      'signup': "url('./logout.jpg')",
    },
  },
  plugins: [],
}
