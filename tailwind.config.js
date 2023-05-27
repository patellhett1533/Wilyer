/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'text': ['Poppins'],
      'title': ['Montserrat'],
      'body': ['"Jost"'],
    },
    screens: {
      'mobile': '270px',


      'tablet': '640px',


      'laptop': '843px',


      'desktop': '1280px',

    },
    extend: {
      colors: {
        'primary': 'rgb(2 132 199)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
