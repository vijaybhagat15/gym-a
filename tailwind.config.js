/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {      colors: {
      'primary': '#606c38', // Primary green shade
      'secondary': '#283618', // Dark green shade
      'accent': '#fefae0', // Light beige
      'highlight': '#dda15e', // Warm orange
      'earthy': '#bc6c25', // Earthy brown
      
      'navy': '#0d3b66',
      'custom-beige': '#faf0ca',
      'sunshine': '#f4d35e',
      'sunset-orange': '#ee964b',
       'custom-orange': '#f95738',
    },},
  },
  plugins: [],
}

