const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'index.bundle.js'
	},
	mode: process.env.NODE_ENV || 'development',
	resolve: {
		extensions: [ '.js' ]
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", 'index.html')
		})
	]
}
