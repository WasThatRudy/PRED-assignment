/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#010101',
        secondary: '#1C1C1C',
        tertiary: '#252525',
        navbar: '#1D1D1D',
        'bg-primary': '#010101',
        'bg-secondary': '#1C1C1C',
        'bg-surface': '#1C1C1C',
        'text-primary': '#FFFFFF',
        'text-secondary': 'rgba(255, 255, 255, 0.82)',
        'text-tertiary': 'rgba(255, 255, 255, 0.4)',
        'border-gray': 'rgba(120, 120, 128, 0.12)',
        'border-light': 'rgba(120, 120, 128, 0.12)',
        'brand-green': '#8CF056',
        'overlay-gray': 'rgba(120, 120, 128, 0.2)',
        'overlay-white': 'rgba(255, 255, 255, 0.06)',
        'footer-bg': 'rgba(37, 37, 37, 0.3)',
        'footer-gradient': '#9C9C9C',
        'white-82': 'rgba(255, 255, 255, 0.82)',
        'white-40': 'rgba(255, 255, 255, 0.4)',
        'white-40-hex': '#FFFFFF66',
        'white-82-hex': '#FFFFFFD1',
        'white-full': '#FFFFFF',
        'gray-12': '#7878801F',
        'white-6': '#FFFFFF0F',
        'button-bg': '#1D1D1D',
        'gray-700': '#FFFFFF1F',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-overlay': 'linear-gradient(0deg, rgba(156, 156, 156, 0.5), rgba(156, 156, 156, 0.5)), rgba(37, 37, 37, 0.3)',
        'gradient-navbar': 'linear-gradient(0deg, #9C9C9C, #9C9C9C), rgba(37, 37, 37, 0.05)',
        'gradient-avatar': 'linear-gradient(180deg, #9DFDE3 0%, #E383D8 100%)',
        'gradient-green-line': 'linear-gradient(90deg, rgba(163,225,86,0.1) 0%, #8CF056 71.63%)',
      },
      backgroundBlendMode: {
        'overlay': 'overlay, normal',
      },
      backdropBlur: {
        '30': '30px',
        '20': '20px',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }], // 12px / 16px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px / 20px
      },
      animation: {
        'border-glow': 'border-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'border-move': 'border-move 3s linear infinite',
        'border-rotate': 'border-rotate 4s linear infinite',
        'border-spin': 'spin 3s linear infinite',
        'border-chase': 'border-chase 3s linear infinite',
      },
      keyframes: {
        'border-glow': {
          '0%, 100%': {
            'border-color': 'rgba(120, 120, 128, 0.12)',
            'box-shadow': '0 0 0px rgba(42, 133, 255, 0)',
          },
          '50%': {
            'border-color': 'rgba(42, 133, 255, 0.6)',
            'box-shadow': '0 0 8px rgba(42, 133, 255, 0.4), 0 0 16px rgba(42, 133, 255, 0.2)',
          },
        },
        'shimmer': {
          '0%': {
            'transform': 'translateX(-100%)',
          },
          '100%': {
            'transform': 'translateX(100%)',
          },
        },
        'border-move': {
          '0%': {
            'transform': 'translateX(-100%)',
          },
          '100%': {
            'transform': 'translateX(400%)',
          },
        },
        'border-rotate': {
          '0%, 100%': {
            top: '0',
            left: '0',
            width: '100%',
            height: '2px',
          },
          '25%': {
            top: '0',
            left: 'calc(100% - 2px)',
            width: '2px',
            height: '100%',
          },
          '50%': {
            top: 'calc(100% - 2px)',
            left: '0',
            width: '100%',
            height: '2px',
          },
          '75%': {
            top: '0',
            left: '0',
            width: '2px',
            height: '100%',
          },
        },
        'border-chase': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

