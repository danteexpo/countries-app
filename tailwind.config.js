module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '2px': '2px',
      },
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    colors: {
      'myblack': '#121212',
      'mylightblack': '#303032',
      'mywhite': '#fff',
      'mygray': '#e0e0e0',
      'mydarkgray': '#696969',
      'myblue': '#1a69ed',
    },
  },
  plugins: [],
}
