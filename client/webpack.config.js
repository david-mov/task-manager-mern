const path = require('node:path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { SourceMapDevToolPlugin } = require('webpack')
const Dotenv = require('dotenv-webpack')

module.exports = (env) => {
  return {
    entry: './src/index.js',

    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].js.map',
      publicPath: '/',
    },

    devtool: 'source-map',

    devServer: {
      port: env.port,
      historyApiFallback: true,
    },

    plugins: [
      new HTMLWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
      }),
      new SourceMapDevToolPlugin({
        filename: '[file].map',
      }),
      new Dotenv(),
    ],

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          resolve: {
            extensions: ['.js', '.jsx'],
          },
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  }
}
