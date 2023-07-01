/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-cyan': '#f0fafb',
        'dark-cyan': 'hsl(180, 8%, 52%)',
        'desaturated': 'hsl(180, 29%, 50%)',
      }
    },
    fontFamily: {
      'main': ['League Spartan', 'sans-serif'],
    },
    screens: {
    'sm': '480px',
    },
  },
  plugins: [],
}

