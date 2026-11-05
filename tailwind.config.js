/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#070B0A',
          soft: '#0B1210',
          card: '#0E1714',
          line: '#1C2A25'
        },
        mint: {
          DEFAULT: '#10B981',
          bright: '#34D399',
          teal: '#2DD4BF',
          cyan: '#22D3EE'
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
