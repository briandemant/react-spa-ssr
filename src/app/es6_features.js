require('6to5/runtime');
require('6to5/polyfill');
var React = require('react/addons');
console.log("I am ES6 JS");
var common = require('./common');
console.log(common.name);
var Peter = require('./jsx_module.jsx');


var peter = React.createElement(Peter, {name: "Hello"});

if (typeof document != 'undefined') 
React.render(
	peter,
  document.getElementById('es6')
);

console.log(React.renderToString(peter));



