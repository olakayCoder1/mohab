/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        headingFont : ['DM Serif Display', 'serif'],
        inconsolata:[ 'Inconsolata', 'monospace'],
        noto: ['Manrope', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      customblack: '#14171A',
      customblue: '#1DA1F2',
      darkgray: '#657786',
      lightgray: '#AAB8C2',
      extralight: '#E1E8ED',
      superextralight: '#F5F8FA',
      white: '#FFFFFF',
      totalblack: '#000000',
      dipbrawn: '#251406',
      lightbrawn: '#452810',
      normalbrawn: '#71655d',
      diporange: '#ea866b',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

