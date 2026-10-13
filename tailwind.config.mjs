/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-primary, #F5BF23)',
          'primary-dark': 'var(--color-primary-dark, #DFA012)',
          accent: 'var(--color-accent, #FF3366)',
          'accent-hover': 'var(--color-accent-hover, #E02052)',
          dark: 'var(--color-dark, #231610)',
          cream: 'var(--color-cream, #FFFDF7)',
          surface: 'var(--color-surface, #FFF8E7)',
          muted: 'var(--color-muted, #725F56)',
          border: 'var(--color-border, #E8DCCB)',
          orange: 'var(--color-orange, #F07E14)'
        }
      },
      fontFamily: {
        display: ['"Shrikhand"', 'cursive'],
        bouncy: ['"DynaPuff"', 'cursive'],
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
