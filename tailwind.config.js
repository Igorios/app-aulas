// tailwind.config.js

module.exports = {
  content: [],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./ui/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: '#4b4b4b', 
      },
    },
  },
  plugins: [],
};
