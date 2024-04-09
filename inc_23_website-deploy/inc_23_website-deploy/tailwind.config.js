/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      gilroy: ['Gilroy', 'sans-serif']
    },
    colors: {
      'white': '#d1d5db',
      'faint_blue': '#2563eb4d',
      'gold': '#f2a30f',
      'light_blue': '#075985cc',
      transparent: 'transparent',
    }
  },
  plugins: [
    
  ],
}