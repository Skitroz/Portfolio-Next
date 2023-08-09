import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        'text': '#000000',
        'background': '#ffffff',
        'primary': '#8fb3ff',
        'secondary': '#ebf1ff',
        'accent': '#6605c7',
      },
    },
  },
  plugins: [],
}
export default config
