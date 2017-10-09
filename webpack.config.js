var path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
	entry: {
		"dist-demo/js/app":"./src-demo/app.js",
		"docs/scripts/main":"./docs/scripts-src/main.js"
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, ''),
		publicPath:'js/'
	},
	"module":{
		"loaders":[
			{
				"test":/\.md$/,
				"use":[
					{
						"loader":"html-loader"
					},
					{
						"loader":"markdown-loader"
					}
				]
			},
			{
				"test":/\.js$/,
				"include":[
					path.resolve(__dirname, "src-demo"),
					path.resolve(__dirname, "docs")
				],
				"loader":"babel-loader",
				"query": {
					"presets": [
						"env",
						"react"
					],
					"plugins":[
						
					]
				}
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				"include":[
					path.resolve(__dirname, "modules/duo/plex")
				],
				loader: 'url-loader'
			},
			{
				test: /\.svg$/, 
				"include":[
					path.resolve(__dirname, "docs")
				],
				loader: 'url-loader'
			},
			{
				"test":/\.scss$/,
				"loader":"style-loader!css-loader!sass-loader!postcss-loader"
			},
			{
				"test": /\.css$/, 
				"loader": 'style-loader!css-loader!postcss-loader' 
			},
			{ 
				test: /\.(png|jpg|jpeg|gif)$/, 
				loader: 'url-loader?name=[hash].[ext]!img-loader' 
			}
		]
	},
	"plugins":[
		new WebpackBuildNotifierPlugin()
	]
};