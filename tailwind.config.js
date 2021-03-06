console.log('TAILWINDS ENV', process.env.NODE_ENV)
const isDev = process.env.NODE_ENV === 'development'
module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  purge: isDev ? [] : ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tomato: {
          '50': '#fbf7f3',
          '100': '#fceee6',
          '200': '#fad8c9',
          '300': '#f8b89a',
          '400': '#f8895c',
          '500': '#f85e33',
          '600': '#f03d21',
          '700': '#ce422b',
          '800': '#a92524',
          '900': '#881f20',
        },
        carrot: {
          '50': '#fbf9f3',
          '100': '#faf6df',
          '200': '#f5ebae',
          '300': '#efd86c',
          '400': '#e2b72c',
          '500': '#d49310',
          '600': '#b56d0a',
          '700': '#8a520d',
          '800': '#663e12',
          '900': '#4e3112',
        },
        olive: {
          '50': '#fafaf7',
          '100': '#f7f8e9',
          '200': '#edf0c3',
          '300': '#dee08e',
          '400': '#bcc248',
          '500': '#91a120',
          '600': '#6a7d13',
          '700': '#516015',
          '800': '#3d4718',
          '900': '#2f3817',
        },
        teal: {
          '50': '#f4f9f9',
          '100': '#e6f7f5',
          '200': '#c8eee9',
          '300': '#9ce0da',
          '400': '#54c5c2',
          '500': '#26a5a2',
          '600': '#1d8481',
          '700': '#1f6866',
          '800': '#1d4f4f',
          '900': '#1a4040',
        },
        denim: {
          '50': '#f4f9fb',
          '100': '#e6f6fa',
          '200': '#c6e9f4',
          '300': '#9ed6f0',
          '400': '#61b5ea',
          '500': '#328ee2',
          '600': '#246ad0',
          '700': '#2453ab',
          '800': '#20407e',
          '900': '#1b3461',
        },
        royalblue: {
          '50': '#f5fafc',
          '100': '#e6f5fc',
          '200': '#c6e4fa',
          '300': '#a1cef9',
          '400': '#6ca5f8',
          '500': '#3d79f6',
          '600': '#2b55ef',
          '700': '#2743d5',
          '800': '#2034a4',
          '900': '#1b2b7e',
        },
        indigo: {
          '50': '#f5f8fc',
          '100': '#eaf1fc',
          '200': '#d1dcfa',
          '300': '#b6c1f9',
          '400': '#9295f8',
          '500': '#6b67f8',
          '600': '#5046f2',
          '700': '#4037dd',
          '800': '#322caf',
          '900': '#282589',
        },
        flamingo: {
          '50': '#f6f7fb',
          '100': '#efeffb',
          '200': '#ddd6f8',
          '300': '#cbb9f7',
          '400': '#b58bf6',
          '500': '#9c5ef4',
          '600': '#7d3eed',
          '700': '#5e31d4',
          '800': '#4728a6',
          '900': '#382281',
        },
        cerise: {
          '50': '#fcf9f9',
          '100': '#fbf0f5',
          '200': '#f8d5ec',
          '300': '#f5b1de',
          '400': '#f57bc5',
          '500': '#f54ea8',
          '600': '#e83083',
          '700': '#bf2566',
          '800': '#8e1e4c',
          '900': '#6d1a3b',
        },
        sunset: {
          '50': '#fcf9f7',
          '100': '#fcf0f0',
          '200': '#fad8dd',
          '300': '#f8b5be',
          '400': '#f8808c',
          '500': '#f9545d',
          '600': '#ef343d',
          '700': '#cd2835',
          '800': '#9f202e',
          '900': '#7c1b27',
        },
        gray: {
          '50': '#f6e9e0',
          '100': '#e3d7cf',
          '200': '#d0c4bd',
          '300': '#b6aca6',
          '400': '#9e9691',
          '500': '#86807c',
          '600': '#6e6a67',
          '700': '#30302d',
          '800': '#272724',
          '900': '#1e2020'
        },
        green: {
          '50': '#DBF1B5',
          '100': '#CFED9E',
          '200': '#B8E46F',
          '300': '#A1DB3F',
          '400': '#85BE24',
          '500': '#648F1B',
          '600': '#4F7115',
          '700': '#3A5310',
          '800': '#25350A',
          '900': '#101704'
        }
      },
      red: {
        '50': '#F6DED8',
        '100': '#F1CCC3',
        '200': '#E7A99A',
        '300': '#DD8671',
        '400': '#D36348',
        '500': '#BB492D',
        '600': '#923923',
        '700': '#692919',
        '800': '#40190F',
        '900': '#170905'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
