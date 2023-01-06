import React from 'react';
import Tile from './tile';
import '../styles/game.css';

const WhitePerspective = class extends React.Component {
	constructor(properties) {
		super(properties);
		this.state = {
			tiles: this.generateTiles(this.props.pieces)

		};

	}
	render() {
		return (
			<div className="ChessBoard">
				{this.state.tiles}
			</div>

		);

	}
	componentWillReceiveProps(properties) {
		this.setState({tiles: this.generateTiles(properties.pieces)});

	}
	generateTiles(pieces) {
		let result = [];
		if (pieces.length === 8) {
			for (let i = 0; i < 8; ++i)
			{
				for (let j = 0; j < 8; ++j)
				{
					if ((i + j) & 1) {
						result.push(<Tile key={i * 8 + j} className="BlackTile" piece={pieces[i][j]} row={i} column={j}></Tile>);

					}
					else {
						result.push(<Tile key={i * 8 + j} className="WhiteTile" piece={pieces[i][j]} row={i} column={j}></Tile>);

					}

				}

			}

		}
		return result;

	}

}

export default WhitePerspective;
