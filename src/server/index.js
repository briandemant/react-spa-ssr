let qwe = (x)=>x * x;

console.log("qwe:" + qwe(4));


require('../app/jsx_features');
require('../app/es6_features');

//var express = require("express")
//var path = require("path")
//var http = require("http")
//var serveStatic = require('serve-static')
//var puer = require("puer")
//
//var compression = require('compression')
//var morgan = require('morgan');
//
//var app = express();
//
//var server = http.createServer(app)
//
//var options = {
//	dir : "public"
//	//ignored : /(\/|^)\..*|node_modules/  //ignored file
//}
//
//app.use(morgan('dev'));
//app.use(compression({
//	threshold : 1024*200
//}))
//
//app.use(puer.connect(app, server, options))   //use as puer connect middleware
//// you must use puer middleware before route and static midleware(before any middle may return 'text/html')
//app.use("/", serveStatic('public',{
//	maxAge : 10
//}))
//
//var Config = require('../config/config');
//
//server.get('*', function(req, res) {
//
//	var bootstrap = {
//		path : req.path
//	};
//
//	var layoutData = _.defaults({
//		applicationStart : 'Application.start(' + htmlescape(bootstrap) + ');',
//	}, LayoutConfig);
//
//	var Application = require(Config.APPLICATION_FILE);
//	var status = Application.RouteUtils.hasMatch(req.path) ? 200 : 404;
//
//	if (Config.SSR) {
//		var rootComponentHTML = Application.start(bootstrap);
//		layoutData.rootComponentHTML = rootComponentHTML;
//	}
//
//	var markup = layout(layoutData);
//
//	res.status(status).send(markup);
//});
//
//server.listen(Config.PORT);
//
//console.log('Server started with NODE_ENV="%s" on PORT="%s"', Config.NODE_ENV, Config.PORT);
//
//
//server.listen(8080, function() {
//	console.log("listen on 8080 port")
//})