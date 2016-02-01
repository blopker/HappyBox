'use strict';

let React = require('react');
let ReactDOM = require('react-dom');

let HappyBoxes = React.createClass({
	getColor: function() {
  		return '#'+Math.floor(Math.random()*16777215).toString(16);
  	},
  	onOver: function() {
  		window.requestAnimationFrame(() => this.forceUpdate());
  	},
	render: function() {
		let boxes = [];

		for (let i = 0; i < 1000; i++) {
			boxes.push(<HappyBox key={i} color={this.getColor()}/>)
		};

		return (
			<div className="happy-boxes" onMouseMove={this.onOver}>{boxes}</div>
		);
	}
});

let HappyBox = props => {
	let style = {
		'backgroundColor': props.color
	};

	return (
		<div className="happy-box" style={style}></div>
	);
};

ReactDOM.render(
  <HappyBoxes/>,
  document.querySelector('.happy-container')
)
