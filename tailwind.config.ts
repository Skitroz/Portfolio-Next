import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#f6e5ec',
        'background': '#220c16',
        'primary': '#752d29',
        'secondary': '#0b0804',
        'accent': '#b8b2b5',
      },
    },
  },
  plugins: [],
}
export default config
