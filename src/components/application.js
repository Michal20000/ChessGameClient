import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProfileNavigationBar from './profile-navigation-bar';
import MainNavigationBar from './main-navigation-bar';

import Home from './home';
import Login from './login';
import Register from './register';
import Profile from './profile';
import NewGame from './new-game';
import Game from './game';
import Games from './games';
import Footer from './footer';
import MM from './MM';
import '../styles/application.css';

const HomePage = 0;
const LoginPage = 1;
const RegisterPage = 2;

const ProfilePage = 10;
const NewGamePage = 11;
const GamePage = 12;
const GamesPage = 13;

const Application = class extends React.Component {
	// NavBar <Main, Login, Register>
	// UserNavBar <Profile, Games, NewGame, Game>
	// <input onChange>
	// <button onClick>
	// <socketio-react> 
	// 	useEffect(() => {
			// socket.on();

	//	}, [socket])
	// This is the remaining problem!
	// Should socket be global?
	constructor(properties) {
		super(properties);
		this.state = {
			profile: false,
			page: 0,

			strings: ['XMM', 'YMM', 'ZMM', 'MMX'],
			MMs: [],
			number: 6

		};
		for (let string of this.state.strings) {
			this.state.MMs.push(<MM key={string} XYZ={string}></MM>);

		}

	}
	componentDidMount() {
		this.cookieHash();
		global.socket.on('LoginResponse', this.handleLoginResponse.bind(this));
		global.socket.on('RegisterResponse', this.handleRegisterResponse.bind(this));
		global.socket.on('LogoutResponse', this.handleLogoutResponse.bind(this));
		console.log('Siema');

	}
	componentWillUnmount() {
		global.socket.off('LoginResponse');
		global.socket.off('RegisterResponse');
		global.socket.off('LogoutResponse');
		console.log('Nara');

	}
	render() {
		return (
			<div className="Application">
				{
					this.state.profile &&
					<ProfileNavigationBar change={this.changePage.bind(this)}/>

				}
				{
					!this.state.profile &&
					<MainNavigationBar change={this.changePage.bind(this)}/>

				}
				{
					this.state.page === HomePage &&
					<Home />

				}
				{
					this.state.page === LoginPage &&
					<Login />

				}
				{
					this.state.page === RegisterPage &&
					<Register />

				}



				{
					this.state.page === ProfilePage &&
					<Profile />

				}
				{
					this.state.page === NewGamePage &&
					<NewGame change={this.changePage.bind(this)}/>

				}
				{
					this.state.page === GamePage &&
					<Game />

				}
				{
					this.state.page === GamesPage &&
					<Games />

				}
				<Footer />



			</div>
			// Login Page
			// Register Page
			// User Page
			// Game Page
			// Games Page

		);

	}
	changePage(page) {
		this.setState({page: page});

	}
	handleMessage(data) {
		// this is application
		// data from server
		console.log(data);

	}
	handleLoginResponse(data) {
		this.setState({profile: data.profile});
		if (data.profile)
			this.changePage(ProfilePage);
		console.log(data);

	}
	handleRegisterResponse(data) {
		this.setState({profile: data.profile});
		if (data.profile)
			this.changePage(ProfilePage);
		console.log(data);

	}
	handleLogoutResponse(data) {
		this.setState({profile: data.profile});
		this.changePage(HomePage);
		console.log(data);

	}
	cookieHash() {
		let cookies = document.cookie.split('; ');
		for (let cookie of cookies) {
			let index = cookie.indexOf('hash=');
			if (index !== -1) {
				let hash = cookie.substring(index + 5);
				global.hash = hash;
				console.log('Session hash exists!');
				return;

			}

		}
		let hash = uuidv4();
		let currentDate = new Date();
		let expiresDate = new Date(currentDate.getTime() + (6 * 60 * 60 * 1000));
		document.cookie = 'hash=' + hash + '; expires=' + expiresDate.toUTCString();
		global.hash = hash;
		console.log('Create a new session hash!');

	}

};

export default Application;
