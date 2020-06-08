// Built-in module from node.js
const path = require('path');
// npm i webpack webpack-cli --save-dev
// npm i webpack-dev-server --save-dev
module.exports = {
  // Path to a input file; path is relative
  entry: './src/index.js',
  // Path to the output file
  output: {
    // Here path is absolute to the root of the comupter not with filename
    path: path.resolve(__dirname, 'dist/assets'),
    // Here to name the output file
    filename: 'bundled.js'
  },
  // webpack-dev-server
  devServer: {
    // the folder to serve 
    contentBase: path.resolve(__dirname, 'dist'),
    // Serve public path of virtual file
    publicPath: '/assets/'
  },
  // loaders are tasks and run the code while loaded thru import statements 
  // npm i babel-loader --save-dev
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};