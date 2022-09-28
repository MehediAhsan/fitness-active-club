/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#dbb8f2",
        
"secondary": "#81e88d",
        
"accent": "#9c5dc1",
        
"neutral": "#24242E",
        
"base-100": "#FAFAFA",
        
"info": "#486BE0",
        
"success": "#7CDEC1",
        
"warning": "#FBC165",
        
"error": "#EE5387",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}