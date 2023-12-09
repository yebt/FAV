/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['emerald', 'lemonade', 'light', 'cupcake', 'dark', 'cmyk', 'forest'],
    darkTheme: 'forest'
  }
}
