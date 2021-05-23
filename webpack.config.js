const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './resources/js/app.js'),
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '/resources/js'),
    },
  },
};
