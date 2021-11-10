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
        'header-mobile': "url('./assets/bg-header-mobile.png')",
        'footer-mobile': "url('./assets/bg-footer-mobile.png')",
        'footer-mobile-svg': "url('./assets/footer.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
