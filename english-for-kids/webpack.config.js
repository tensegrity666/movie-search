const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: ['./src/scripts/index.js'],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'inline-source-map',
  devServer: {
    open: false,
    contentBase: path.join(__dirname, 'build'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: 'src/assets/',
        to: 'assets/',
      },
    ]),
    new ImageminPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching',
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[contenthash].css',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { esModule: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          esModule: true,
          attributes: true,
        },
      },
    ],
  },
};
