"use strict";
require("6to5/register")({experimental : true});
process.argv = process.argv.slice(0, 1).concat(process.argv.slice(2));

require('node-jsx').install({
	extension : '.jsx',
	'harmony' : true
});

require(__dirname + '/../../' + process.argv[1]);


