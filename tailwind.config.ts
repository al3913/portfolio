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
        // Brand colors from Figma design
        'brand-black': '#00000D',
        'brand-light-blue': '#ccdcff',
      },
      fontFamily: {
        // Markl Mono font family
        'markl': ['var(--font-markl)', 'monospace'],
        
        // Ethos Nova font family
        'ethos': ['var(--font-ethos)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
