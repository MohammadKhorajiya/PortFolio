/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F8F7F4',
          soft: '#F1EFE9',
          card: '#FFFFFF',
          line: '#E5E2DA'
        },
        ink: {
          DEFAULT: '#232925',
          soft: '#4A524B',
          muted: '#77807A',
          faint: '#9AA39C'
        },
        mint: {
          DEFAULT: '#059669',
          bright: '#047857',
          teal: '#0D9488',
          cyan: '#0891B2'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'blink': 'blink 1.1s step-end infinite'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 0.75 }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      }
    },
  },
  plugins: [],
}
