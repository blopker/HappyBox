/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react')

var HappyHolder = React.createClass({
	getColor: function() {
  		return '#'+Math.floor(Math.random()*16777215).toString(16);
  	},
  	onOver: function() {
  		this.forceUpdate();
  	},
	render: function() {
		var boxes = [];

		for (var i = 0; i < 10000; i++) {
			boxes.push(<HappyBox key={i} color={this.getColor()}/>)
		};

		return (
			<div className="happy-holder" onMouseMove={this.onOver}>{boxes}</div>
		);
	}
});

var HappyBox = React.createClass({
	render: function() {
		var style = {
			'background-color': this.props.color
		};

		return (
			<div className="happy-box" style={style}></div>
		);
	}
});

React.renderComponent(
  <HappyHolder/>,
  document.body
)
