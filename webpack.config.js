const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const environment = process.env.Node_ENV;

module.exports = {
	// add mode
	mode: environment,
	// define entry point
	entry: './client/index.js',
	// define output
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
	// add plugin(s)  html webpack
	plugins: [
		new HTMLWebPackPlugin({
			template: './client/index.html'
		})
	],

	// add rules with all necessary loader and presets
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.png|svg|jpg|gif$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(wav|mp3)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]'
						}
					}
				]
			},
		],
	},

	// set up dev server
	devServer: {
		static: {
			directory: path.join(__dirname, './build'), // path.resolve => user/tommyli/desktop/scractchproject/soundboard/build
		},
		// set up proxy
		compress: true,
		port: 8080,
		hot: true,
		proxy: {
			'/': 'http://localhost:3000' // localhost:3000/
		}
	}

};