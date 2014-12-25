var path = require("path");
var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
	__DEV__ : JSON.stringify(JSON.parse(process.env.BUILD == 'dev' || 'false')),
	__PRERELEASE__ : JSON.stringify(JSON.parse(process.env.BUILD == 'pre_release' || 'false'))
});


module.exports = {
	entry : {
		jsx : "./src/app/jsx_features.jsx",
		es6 : "./src/app/es6_features.js"
	},
	module : {
		loaders : [
			//{test : /\.js$/, loader : 'jsx-loader?harmony'},
			//{test : /^(?!.*(bower_components|node_modules))+.+\.js$/, loader : 'traceur'},
			{test : /^(?!.*(bower_components|node_modules))+.+\.js$/, loader : '6to5-loader?experimental' },
			//{test : /\.js$/, loader : 'traceur?experimental&runtime'},
			//{test : /\.jsx$/, loader : 'jsx-loader?harmony!traceur'},
			{test :/^(?!.*(bower_components|node_modules))+.+\.jsx$/, loader : '6to5-loader?experimental!jsx-loader'},
			//{test :/^(?!.*(bower_components|node_modules))+.+\.jsx$/, loader : 'traceur!jsx-loader'},
		]
	},
	output : {
		path : path.join(__dirname, "public", "assets"),
		publicPath : "/assets/",
		filename : "[name].bundle.js",
		chunkFilename : "[id].chunk.js"
	},
	plugins : [
		definePlugin,
		new webpack.optimize.CommonsChunkPlugin("commons.js"),
		new webpack.optimize.LimitChunkCountPlugin({maxChunks : 3}),
		//new webpack.optimize.DedupePlugin(),
		//new webpack.optimize.UglifyJsPlugin({
		//	compress : {
		//		warnings : false
		//	}
		//})
	]
}