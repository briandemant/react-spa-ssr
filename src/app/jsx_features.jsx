require('6to5/runtime');
require('6to5/polyfill');
console.log("I AM JSX");
var mod = require('./module');
console.log(mod.name);

var common = require('./common');

console.log(common.name);


var React = require('react/addons');
var Hans = React.createClass({
	render : function() {
		return (<div>hans was here</div>)
	}
})
var Peter = require('./jsx_module.jsx');
console.log(React.renderToString(<Peter />));
console.log(React.renderToString(<Hans />));

if (typeof document != 'undefined') {
	React.render(
		<Hans />,
		document.getElementById('jsx')
	);
}