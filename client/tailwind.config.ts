import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily:{
      Roboto:["Roboto","sans-serif"],
      Poppins:["Poppins","sans-serif"]
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    colors:{
      "primary_color":"#fff",
      "second_color":"#000",
      "third_color":"#f1f1f1",
      "opacity_color":"#f23",
      "main-text_color":"#254522",
    }
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs")
  ],
}
export default config
