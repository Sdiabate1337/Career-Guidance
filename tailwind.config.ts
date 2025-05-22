import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary orange palette
        orange: {
          50: '#FFF8F3',
          100: '#FFEEDE',
          200: '#FFD9BD',
          300: '#FFC499',
          400: '#FFAA70',
          500: '#FF6B35', // Main primary color
          600: '#E65525',
          700: '#CC4418',
          800: '#A3360F',
          900: '#7A2909',
          950: '#461804',
        },
        // Secondary grey palette
        grey: {
          50: '#F9F9F9',
          100: '#EBEBEB', // secondary-light
          200: '#D6D6D6',
          300: '#B8B8B8',
          400: '#999999',
          500: '#5D5D5D', // secondary
          600: '#4D4D4D',
          700: '#3D3D3D',
          800: '#2A2A2A', // secondary-light in dark mode
          900: '#1A1A1A',
          950: '#0A0A0A',
        },
      },
      fontFamily: {
        // Serif fonts for headings
        serif: [
          'Georgia', 
          'Cambria', 
          '"Times New Roman"', 
          'Times', 
          'serif'
        ],
        // Sans-serif fonts for body text
        sans: [
          'var(--font-geist-sans)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        // Maintain the mono font for code elements
        mono: [
          'var(--font-geist-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ],
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.grey.700'),
            h1: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: theme('colors.grey.900'),
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: theme('colors.grey.800'),
            },
            h3: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: theme('colors.grey.800'),
            },
            h4: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: theme('colors.grey.800'),
            },
            'a': {
              color: theme('colors.orange.500'),
              '&:hover': {
                color: theme('colors.orange.600'),
              },
            },
            'strong': {
              color: theme('colors.grey.800'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.grey.300'),
            h1: {
              color: theme('colors.grey.100'),
            },
            h2: {
              color: theme('colors.grey.200'),
            },
            h3: {
              color: theme('colors.grey.200'),
            },
            h4: {
              color: theme('colors.grey.200'),
            },
            'a': {
              color: theme('colors.orange.400'),
              '&:hover': {
                color: theme('colors.orange.300'),
              },
            },
            'strong': {
              color: theme('colors.grey.200'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography()],
  darkMode: 'media', // Respects the user's system preference
}

export default config 