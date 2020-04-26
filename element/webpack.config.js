const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyFiles = require('copy-webpack-plugin');
const path = require("path");

module.exports = ({ mode }) => {
	return {
		mode, 
		entry: {
			app: './src/html/index.ts',
		},
		output: {
			filename: 'bundle.js',
			path: path.join(__dirname, 'dist', 'html'),
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			]
		},
		resolve: {
			extensions: [ '.tsx', '.ts', '.js' ],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/html/index.html'
			}),
			new CopyFiles([
				{
					from: 'src/public',
					to: '.',
				}
			]),
		],
		devtool: mode === 'development' ? 'source-map' : 'none' 
	};
};