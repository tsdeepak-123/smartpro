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
        TextColor: '#3A3A3A',
        Paragraph: '#3A3A3A',
        customGreen: '#99BF34',
        StrokeBlue: 'rgba(0, 106, 174, 0.1)',
        Readmore: '#006AAE',
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(90deg, rgba(0,106,174,1) 0%, rgba(0,106,174,0) 0%, rgba(0,106,174,0.5) 100%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
