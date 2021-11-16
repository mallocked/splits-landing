module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1872E4',
          dark: '#009eeb',
        }
      },
      backgroundImage: {
        'blue-blob': "url('./assets/artist-spotlight-blob.png')",
        'header': "url('./assets/bg-header.svg')",
        'header-lg': "url('./assets/bg-header-lg.svg')",
        'footer': "url('./assets/bg-footer.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
