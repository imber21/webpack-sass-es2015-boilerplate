
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';

var webpack = require('webpack');
var path = require('path');
var extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

var plugins = [
	extractSass,
	new HtmlWebpackPlugin({
		template: 'index.ejs',
		title: 'Template'
	})
];

if (PROD) {
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		uglifyOptions: {
			compress: { 
				warnings: false 
			}
		}
	}));
}

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		app: './entry.js',
	},
	output: {
		filename: PROD ? '[name].min.js' : '[name].js',
		path: path.resolve(__dirname, './dist'),
	},
    module: {
        rules: [
			{
				test: /\.(jpe?g|png|gif|svg)$/i, 
				loader: 'file-loader?name=./assets/images/[name].[ext]'
			},
			{ 
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, 
				loader: 'file-loader?name=./assets/fonts/[name].[ext]' 
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.(scss|sass)$/,
				use: extractSass.extract({
					use: [{
						loader: "css-loader"
					}, {
						loader: "sass-loader"
					}],
					fallback: "style-loader"
				})
			}
		]
    },
	devServer: {
		contentBase: [
			path.resolve(__dirname, './src'),
		]
	},
    plugins: plugins
};