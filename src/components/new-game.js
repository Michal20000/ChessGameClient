import React from "react";
import '../styles/new-game.css';

const NewGame = class extends React.Component {
	constructor(properties) {
		super(properties);
		
	}
	render() {
		// BULLET
		// BLITZ
		// RAPID
		// CLASSICAL
		return (
			<main className="NewGame">
				<div className="NewGameContainer">
					<div className="NewGameBlock"
						onClick={this.handleBulletClick.bind(this)}>
						BULLET<br />
						1 + 0
					</div>
					<div className="NewGameBlock"
						onClick={this.handleBlitzClick.bind(this)}>
						BLITZ<br />
						3 + 0
					</div>
					<div className="NewGameBlock"
						onClick={this.handleRapidClick.bind(this)}>
						RAPID<br />
						10 + 0
					</div>
					<div className="NewGameBlock"
						onClick={this.handleClassicalClick.bind(this)}>
						CLASSICAL<br />
						30 + 0
					</div>
					<div className="Clear"></div>

				</div>

			</main>
			
		);

	}
	handleBulletClick(event) {
		this.props.change(12);
		let data = {
			hash: global.hash,
			mainData: {
				duration: 60

			}

		};
		global.socket.emit('RoomRequest', data);

	}
	handleBlitzClick(event) {
		this.props.change(12);
		let data = {
			hash: global.hash,
			mainData: {
				duration: 180

			}

		};
		global.socket.emit('RoomRequest', data);

	}
	handleRapidClick(event) {
		this.props.change(12);
		let data = {
			hash: global.hash,
			mainData: {
				duration: 600

			}

		};
		global.socket.emit('RoomRequest', data);

	}
	handleClassicalClick(event) {
		this.props.change(12);
		let data = {
			hash: global.hash,
			mainData: {
				duration: 1800

			}

		};
		global.socket.emit('RoomRequest', data);

	}

}

export default NewGame;
