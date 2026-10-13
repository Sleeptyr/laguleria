/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          canvas: '#E7A494',
          surface: '#FFFFFF',
          card: '#FFF8F5',
          dark: '#1C1614',
          muted: '#4A3A33',
          border: 'rgba(28, 22, 20, 0.15)',
          pink: '#E7A494',
          orange: '#F07E14',
          yellow: '#F7C02B',
          // Compatibilidad retroactiva
          primary: '#E7A494',
          'primary-dark': '#D48877',
          accent: '#F07E14',
          cream: '#FFF8F5'
        }
      },
      fontFamily: {
        serif: ['"Caprasimo"', '"Fraunces"', 'Georgia', 'serif'],
        editorial: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        logo: ['"Shrikhand"', 'cursive'],
        display: ['"Caprasimo"', 'cursive', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' }
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-2deg)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 51, 102, 0.4)' },
          '50%': { boxShadow: '0 0 0 14px rgba(255, 51, 102, 0)' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-reverse': 'float-reverse 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s infinite'
      }
    }
  },
  plugins: []
};
