import React from 'react';

const MM = class extends React.Component {
	constructor(properties) {
		super(properties);
		this.state = {
			x: 1
			
		};
		//console.log(properties);
		//console.log(this.state);

	}
	render() {
		return (
			<div>{this.props.XYZ}</div>

		);

	}

}

export default MM;
