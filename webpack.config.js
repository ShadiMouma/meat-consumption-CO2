const path = require('path');
const glob = require('glob');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const BrotliPlugin = require('brotli-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const PurgecssPlugin = require('purgecss-webpack-plugin');
const PATHS = { src: path.join(__dirname, 'src') };

const { CheckerPlugin } = require('awesome-typescript-loader');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');


module.exports = {
  entry        : [ "@babel/polyfill" , "./src/js/main.ts" ],
  output       : {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },


  optimization: {
      minimize: true,
      minimizer: [ new TerserPlugin() ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: './css/style.css',
      chunkFilename: 'style.css',
      ignoreOrder: false,
    }),
    new CopyWebpackPlugin([
       { from: 'src/img', to: './img' }
    ]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CheckerPlugin(),
    new HardSourceWebpackPlugin()
  ],

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

      {
        test : /\.(sa|sc|c)ss$/,
        use  : [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options : { importLoaders : 1 } },
          { loader: 'sass-loader' },
          'postcss-loader'
        ],
      },
    ]
  },

  resolve: {
    extensions: [ '.ts',  '.js' ]
  },

  devServer: {
    contentBase: './public/dist'
  }
};