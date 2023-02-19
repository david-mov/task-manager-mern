const path = require('node:path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {

	return {
		entry: './src/index.js',

		output: {
			path: path.join(__dirname, '/dist'),
			filename: '[name].bundle.js'
		},

		devServer: {
			port: env.port
		},

		plugins: [
			new HTMLWebpackPlugin({
				template: './public/index.html',
				favicon: './public/favicon.ico'
			})
		],

		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					resolve: {
	        			extensions: [".js", ".jsx"]
	      			},
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react']
						}
					}
				}
			]
		}
	}

}