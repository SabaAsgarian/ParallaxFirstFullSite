/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'food': "url('./components/img/bg_eat.jpg')",
        'dir': "url('./components/img/AAA.jpg')",
        'trav': "url('./components/img/bg_how_to.jpg')",
        'end': "url('./components/img/map_clean.webp')",
     
      },
      
     
    },
  },
  plugins: [],
};
