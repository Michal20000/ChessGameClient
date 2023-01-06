import React from 'react';
import Piece from './piece';

const Tile = class extends React.Component {
	constructor(properties) {
		super(properties);
		this.state = {
			piece: this.props.piece,
			row: this.props.row,
			column: this.props.column

		};

	}
	render() {
		return (
			<div className={this.props.className}
				onDragOver={(event) => event.preventDefault()}
				onDrop={this.handleDrop.bind(this)}>
				{
					this.state.piece != null &&
					<Piece value={this.state.piece}
						row={this.state.row} column={this.state.column}/>

				}
			</div>

		);

	}
	componentWillReceiveProps(properties) {
		this.setState({piece: properties.piece});
		this.setState({row: properties.row});
		this.setState({column: properties.column});

	}
	handleDrop(event) {
		global.to = {
			row: this.props.row,
			column: this.props.column

		};
		let data = {
			hash: global.hash,
			mainData: {
				from: global.from,
				to: global.to,
				promotion: global.promotion

			}

		};
		global.promotion = 0;
		global.socket.emit('MoveRequest', data);

	}

}

export default Tile;
