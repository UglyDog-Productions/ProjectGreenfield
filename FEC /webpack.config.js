/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'client/src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client/src'),
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: '10',
                      browsers: ['>0.25%', 'not ie 11', 'not op_mini all'],
                    },
                  },
                ],
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-runtime',
              ],
            },
          },
          'eslint-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
};
