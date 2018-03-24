'use strict';

module.exports = {
  entry: [
    'babel-polyfill',
    './client/react/index.js'
  ],
  output: {
    filename: './public/bundle.js',
    publicPath: '/',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
};
