/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          DEFAULT: '#6A3CFF',
          50: '#F3F0FF',
          100: '#E3DCFF',
          200: '#C5B5FF',
          300: '#A78FFF',
          400: '#8A69FF',
          500: '#6A3CFF',
          600: '#542FCE',
          700: '#3E229C',
          800: '#28146A',
          900: '#120738'
        },
        accent: {
          pink: '#FF6FB1',
          blue: '#3AC8FF'
        }
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(148, 93, 255, 0.55), transparent 60%), radial-gradient(circle at top right, rgba(58, 200, 255, 0.45), transparent 55%), radial-gradient(circle at bottom, rgba(255, 111, 177, 0.45), rgba(14, 20, 51, 0.9))'
      },
      boxShadow: {
        glass: '0 30px 60px -20px rgba(90, 60, 255, 0.45)',
        neon: '0 0 40px rgba(148, 93, 255, 0.6)'
      }
    }
  },
  plugins: []
};
