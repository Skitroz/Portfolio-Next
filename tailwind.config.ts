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
        'text': '#f5f3f7',
        'background': '#0a080c',
        'primary': '#34283e',
        'secondary': '#100c13',
        'accent': '#785d8e',
      },
    },
  },
  plugins: [],
}
export default config
