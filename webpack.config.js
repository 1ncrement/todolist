/**
 * Created by increment on 06.08.16.
 */
var path = require('path'),
	webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./app/js/index'
	],
	output: {
		path: path.join(__dirname, 'src/js'),
		publicPath: '/src/js/',
		filename: 'bundle.min.js'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				loaders: ['ng-annotate', 'babel-loader'],
				include: [
					path.resolve(__dirname, 'app/js')
				],
				test: /\.js$/
			},
			{
				loader: 'style-loader!css-loader!sass-loader',
				include: [
					path.resolve(__dirname, 'app/scss')
				],
				test: /\.scss$/
			}
		]
	}
};