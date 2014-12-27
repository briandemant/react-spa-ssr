var path = require("path");
var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
	__DEV__ : JSON.stringify(JSON.parse(process.env.BUILD == 'dev' || 'false')),
	__PRERELEASE__ : JSON.stringify(JSON.parse(process.env.BUILD == 'pre_release' || 'false'))
});


module.exports = {
	//target : 'async-node',
	entry : {
		//output : './tmp/src.jsx',
		//output2 : './tmp/src2.jsx'
		jsx : "./src/app/jsx_features.jsx",
		es6 : "./src/app/es6_features.js"
	},
	module : {
		loaders : [ 
			{
				test : /^(?!.*(bower_components|node_modules))+.+\.js$/,
				//loader : '6to5-loader?experimental&runtime'
				loader : '6to5-loader?experimental=true&runtime=true'
			}, 
			{
				test : /^(?!.*(bower_components|node_modules))+.+\.jsx$/,
				loader : 'jsx-loader?harmony'
				//loader : '6to5-loader?experimental&runtime!jsx-loader'
			},
		]
	},
	output : {
		path : path.join(__dirname, "public", "assets"),
		publicPath : "/assets/",
//		path : path.join(__dirname, "public", "assets", "[hash]"),
//		publicPath : "/assets/[hash]/",
		filename : "[name].bundle.js",
		chunkFilename : "[id].chunk.js"
	},
	plugins : [
		definePlugin,
		new webpack.optimize.CommonsChunkPlugin("commons.js"),
		//new webpack.optimize.LimitChunkCountPlugin({maxChunks : 3}),
		//new webpack.optimize.DedupePlugin(),
		//new webpack.optimize.UglifyJsPlugin({
		//	compress : {
		//		warnings : false
		//	}
		//})
	]
}