module.exports = {
  proxy: 'localhost:3000',
  files: ['src/assets/**/*.css', 'src/templates/**/*.njk', 'src/assets/**/*.js'],
  ignore: ['node_modules'],
  reloadDelay: 10,
  ui: {
    port: 3002,
  },
  notify: false,
  port: 3001,
  open: false,
};
