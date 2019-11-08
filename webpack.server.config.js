const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');


module.exports = {
  entry: {
    server: './src/server/server.ts',
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  target: 'node',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env', '@babel/preset-react' ]
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
    ]
  },

  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
};