import React from "react";

const Piece = class extends React.Component {
	constructor(properties) {
		super(properties);
		this.state = {
			value: this.props.value,
			row: this.props.row,
			column: this.props.column

		};

	}
	render() {
		return (
			<img className="Piece" draggable
				onDragStart={() => global.from = {row: this.state.row, column: this.state.column}}
				src={this.imageSource(this.state.value)}
				alt="Piece">

			</img>

		);

	}
	componentWillReceiveProps(properties) {
		this.setState({value: properties.value});
		this.setState({row: properties.row});
		this.setState({column: properties.column});

	}
	imageSource(value) {
		if (value === 0) return require("../pieces/WhitePawn.png");
		else if (value === 1) return require("../pieces/WhiteRook.png");
		else if (value === 2) return require("../pieces/WhiteKnight.png");
		else if (value === 3) return require("../pieces/WhiteBishop.png");
		else if (value === 4) return require("../pieces/WhiteQueen.png");
		else if (value === 5) return require("../pieces/WhiteKing.png");
		else if (value === 6) return require("../pieces/BlackPawn.png");
		else if (value === 7) return require("../pieces/BlackRook.png");
		else if (value === 8) return require("../pieces/BlackKnight.png");
		else if (value === 9) return require("../pieces/BlackBishop.png");
		else if (value === 10) return require("../pieces/BlackQueen.png");
		else if (value === 11) return require("../pieces/BlackKing.png");

	}

}

export default Piece;
