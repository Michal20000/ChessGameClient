import React from "react";
import '../styles/navigation-bar.css';

const ProfilePage = 10;
const NewGamePage = 11;
const GamePage = 12;
const GamesPage = 13;

const ProfileNavigationBar = class extends React.Component {
	constructor(properties) {
		super(properties);

	}
	// NEW GAME like NEW GAME + GAME
	// GAMES
	render() {
		return (
			<nav className="NavigationBar">
				<ul>
					<li onClick={this.handleProfileClick.bind(this)}>PROFILE</li>
					<li onClick={this.handleNewGameClick.bind(this)}>NEW GAME</li>
					<li onClick={this.handleGameClick.bind(this)}>GAME</li>
					<li onClick={this.handleGamesClick.bind(this)}>GAMES</li>
					<li onClick={this.handleLogoutClick.bind(this)}>LOGOUT</li>

				</ul>

			</nav>

		);

	}
	handleProfileClick(event) {
		this.props.change(ProfilePage);

	}
	handleNewGameClick(event) {
		this.props.change(NewGamePage);

	}
	handleGameClick(event) {
		this.props.change(GamePage);

	}
	handleGamesClick(event) {
		this.props.change(GamesPage);

	}
	handleLogoutClick(event) {
		let data = {
			hash: global.hash,
			mainData: null

		};
		console.log(data);
		global.socket.emit('LogoutRequest', data);

	}

}

export default ProfileNavigationBar;
