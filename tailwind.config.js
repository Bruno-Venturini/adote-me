/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FFD2D2",
          "secondary": "#F26363",
          "accent": "#A63333",
          "neutral": "#d1d5db",
          "base-100": "#FFFFFF",
          "base-200": "#9ca3af",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#A63333",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}
