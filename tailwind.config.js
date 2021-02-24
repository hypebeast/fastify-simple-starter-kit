module.exports = {
  purge: ['./src/**/*.njk', './src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
