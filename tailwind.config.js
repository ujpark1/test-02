/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral': {
          'n100': '#f1f5f9',
          'n200': '#e2e8f0',
          'n400': '#94a3b8',
          'n500': '#64748b',
          'n800': '#1e293b',
        },
        'shade': {
          'white': '#ffffff',
        },
        'primary-color': {
          'primary-color': '#2b8761',
        },
        'accent-color': {
          'accent-color': '#3c9afb',
        },
      },
      fontFamily: {
        'gabarito': ['Gabarito', 'sans-serif'],
        'sf-pro': ['SF Pro Text', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
