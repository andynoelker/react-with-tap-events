var webpack = require('webpack');

var env = process.env.NODE_ENV;

var config = {
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ],
};

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false 
      }
    })
  );
}

module.exports = config;
