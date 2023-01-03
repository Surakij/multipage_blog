const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env) => ({
  entry: { index: './src/index.js' },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  devtool: env.production ? 'source-map' : 'eval-source-map',
  mode: env.production ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(jpg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    filename: "index.html",
    template: './index.html',
  }),
    new HtmlWebpackPlugin({
      filename: "feedback.html",
      template: './feedback.html',
    }),
    new HtmlWebpackPlugin({
      filename: "list_of_entries.html",
      template: './list_of_entries.html',
    }),
    new HtmlWebpackPlugin({
      filename: "entry_page.html",
      template: './entry_page.html',
    }),
  new MiniCssExtractPlugin(),
  new ESLintPlugin(),
  ],
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: ['*.html'],
  },
});
