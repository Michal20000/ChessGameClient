import React from "react";
import '../styles/login.css';

const Login = class extends React.Component {
	constructor(properties) {
		super(properties);
		this.state = {
			username: '',
			password: ''

		};
		
	}
	render() {
		return (
			<main className="Login">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label>Username: </label><br />
					<input type="text"
						value={this.state.username}
						onChange={this.handleUsernameChange.bind(this)}>
					</input><br />
					<label>Password: </label><br />
					<input type="password" autoComplete="on"
						value={this.state.password}
						onChange={this.handlePasswordChange.bind(this)}>
					</input><br /><br />
					<button type="submit">Login</button><br />

				</form>

			</main>
			
		);

	}
	componentDidMount() {

	}
	componentWillUnmount() {
		
	}
	handleSubmit(event) {
		event.preventDefault();
		let data = {
			hash: global.hash,
			mainData: {
				username:	this.state.username,
				password:	this.state.password

			}

		};
		console.log(data);
		global.socket.emit('LoginRequest', data);
		
	}
	handleUsernameChange(event) {
		this.setState({username: event.target.value});

	}
	handlePasswordChange(event) {
		this.setState({password: event.target.value});
		
	}

}

export default Login;
