const resolve = require('path').resolve,
      HtmlPlugin = require('html-webpack-plugin'),
      MiniCSS = require('mini-css-extract-plugin');

const config = {
  entry: './client',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [['env', {modules: false}], 'react', 'stage-2']
      }
    }, {
      test: /\.(scss|css)/,
      use: [
        MiniCSS.loader,
        'css-loader', 
        'sass-loader'
      ]
    }]
  }, 
  plugins: [
    new HtmlPlugin({ template: './client/index.html'}),
    new MiniCSS()
  ]
}

module.exports = config;