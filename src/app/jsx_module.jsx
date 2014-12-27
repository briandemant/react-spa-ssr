console.log("I AM JSX MODULE");
  
var React = require('react/addons');
var Peter = React.createClass({
	render: function() {
		return (<div>peter was here {this.props}</div>)
	}
})
 
module.exports = Peter;
 