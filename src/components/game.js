import React from "react";
import WhitePerspective from './white-perspective';
import BlackPerspective from './black-perspective';
import '../styles/game.css';

const Game = class extends React.Component {
	constructor(properties) {
		super(properties);
		this.state = {
			pieces: [],
			color: undefined,
			white: '',
			black: '',
			whiteTime: '',
			blackTime: '',
			gameState: undefined,
			result: '',
			rook: false,
			horse: false,
			bishop: false,
			queen: false

		};
		
	}
	render() {
		return (
			<main className="Game">
				<div className="Result">{this.state.white}{this.state.whiteTime}</div>
				<div className="Result">{this.state.black}{this.state.blackTime}</div>
				<div className="Result">{this.state.result}</div>
				{
					this.state.color === 0 &&
					<WhitePerspective pieces={this.state.pieces}/>

				}
				{
					this.state.color === 1 &&
					<BlackPerspective pieces={this.state.pieces}/>

				}
				{
					(this.state.color === 0 || this.state.color === 1) &&
					<div className="Promotion">
						<div className="ResignDraw"
							onClick={this.handleDrawOffer.bind(this)}>DRAW OFFER</div>

						<img className="PieceButton"
							onClick={(event) => global.promotion = global.promotion === 7 ? 0 : 7}
							src={this.state.color === 0 || true ? require("../pieces/WhiteRook.png") : require("../pieces/BlackRook.png")}
							alt="Piece">

						</img>
						<img className="PieceButton"
							onClick={(event) => global.promotion = global.promotion === 6 ? 0 : 6}
							src={this.state.color === 0 || true ? require("../pieces/WhiteKnight.png") : require("../pieces/BlackKnight.png")}
							alt="Piece">

						</img>
						<img className="PieceButton"
							onClick={(event) => global.promotion = global.promotion === 5 ? 0 : 5}
							src={this.state.color === 0 || true ? require("../pieces/WhiteBishop.png") : require("../pieces/BlackBishop.png")}
							alt="Piece">

						</img>
						<img className="PieceButton"
							onClick={(event) => global.promotion = global.promotion === 4 ? 0 : 4}
							src={this.state.color === 0 || true ? require("../pieces/WhiteQueen.png") : require("../pieces/BlackQueen.png")}
							alt="Piece">

						</img>

						<div className="ResignDraw"
							onClick={this.handleResign.bind(this)}>RESIGN</div>

					</div>

				}
				{/*
					(this.state.color === 0 || this.state.color === 1) &&
					<div className="ResignDrawContainer">
						<div className="ResignDraw"
							onClick={this.handleDrawOffer.bind(this)}>DRAW OFFER</div>
						<div className="ResignDraw"
							onClick={this.handleResign.bind(this)}>RESIGN</div>
					
					</div>

			*/}

			</main>
			
		);

	}
	componentDidMount() {
		global.socket.on('RoomResponse', this.handleBulletResponse.bind(this));
		global.socket.on('RoomResult', this.handleBulletResult.bind(this));
		this.routineFunction = setInterval(() => {
			this.setState((state) => {
				if (state.result == '' && state.whiteTime != '' && state.blackTime != '') {
					if (state.gameState == 0 && state.whiteTime > 0) return {whiteTime: this.state.whiteTime - 1};
					else if (state.gameState == 1 && state.blackTime > 0) return {blackTime: this.state.blackTime - 1};
	
				}

			});

		}, 1000);

	}
	componentWillUnmount() {
		global.socket.off('RoomResponse');
		global.socket.off('RoomResult');
		clearInterval(this.routineFunction);

	}
	handleDrawOffer(event) {
		event.currentTarget.classList.toggle('Clicked');
		let data = {
			hash: global.hash,
			mainData: null

		};
		global.socket.emit('DrawOfferRequest', data);

	}
	handleResign(event) {
		event.currentTarget.classList.add('Clicked');
		let data = {
			hash: global.hash,
			mainData: null

		};
		global.socket.emit('ResignRequest', data);

	}
	handleBulletResponse(data) {
		if (data.white && data.black) {
			this.setState({white: 'WHITE: ' + data.white + ' '});
			this.setState({black: 'BLACK: ' + data.black + ' '});

		}
		this.setState({gameState: data.state});
		this.setState({whiteTime: data.whiteTime});
		this.setState({blackTime: data.blackTime});
		this.setState({pieces: data.pieces});
		this.setState({color: data.color});
		console.log(data);

	}
	handleBulletResult(data) {
		this.setState({result: data.result});
		console.log(data);

	}

}

export default Game;
