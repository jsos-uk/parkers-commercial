/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        teko: ['Outfit', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#f0f7fc',
          100: '#e0eef9',
          500: '#104A6E',
          600: '#0c3854',
          700: '#08253a',
          900: '#212d45',
          accent: '#6DC3F6',
          text: '#1e293b'
        }
      }
    },
  },
  plugins: [],
}
