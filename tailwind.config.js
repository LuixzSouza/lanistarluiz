/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-homing": "url('/bg-home.png')",
        "bg-rectangle": "url('/Bg-Rectangle.png')",
        "bg-better": "url('/Bg-Better.png')",
      },
    },
  },
  plugins: [],
};
