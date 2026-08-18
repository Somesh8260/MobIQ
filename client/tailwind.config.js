/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00f2fe',
          purple: '#8b5cf6',
          emerald: '#10b981',
          amber: '#fbbf24',
          orange: '#f97316'
        }
      }
    },
  },
  plugins: [],
}
