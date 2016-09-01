var webpack = require('webpack');

module.exports = {
  entry: {
    React: ['./src/react-patch.js'],
  },
  output: {
    libraryTarget: 'var',
    library: 'React',
    path: __dirname + '/build/',
    filename: 'react-with-addons.js',
  },
  devtools: 'eval',
  plugins: [],
};
