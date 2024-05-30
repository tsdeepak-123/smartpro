/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#02405B',
        greenprimary: '#99BF34',
        TextColor:'#3A3A3A',
        Paragraph:'#3A3A3A',
        customGreen: '#99BF34'
      },
    },
  },
  plugins: [],
};
