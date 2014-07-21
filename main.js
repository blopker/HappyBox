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

		for (var i = 0; i < 1000; i++) {
			boxes.push(<HappyBox key={i} color={this.getColor()}/>)
		};

		return (
			<div className="happy-holder" onMouseMove={this.onOver}>{boxes}</div>
		);
	}
});

var PureRenderMixin = require('react/addons').PureRenderMixin;
var HappyBox = React.createClass({
	mixins: [PureRenderMixin],
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
