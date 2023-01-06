import React from "react";
import '../styles/register.css';

const Register = class extends React.Component {
	constructor(properties) {
		super(properties);
		this.state = {
			username: '',
			email: '',
			password: ''

		};

	}
	render() {
		return (
			<main className="Register">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label>Username: </label><br />
					<input type="text"
						value={this.state.username}
						onChange={this.handleUsernameChange.bind(this)}>
					</input><br />
					<label>Email: </label><br />
					<input type="text"
						value={this.state.email}
						onChange={this.handleEmailChange.bind(this)}>
					</input><br />
					<label>Password: </label><br />
					<input type="password" autoComplete="on"
						value={this.state.password}
						onChange={this.handlePasswordChange.bind(this)}>
					</input><br /><br />
					<button type="submit">Register</button><br />

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
				email: this.state.email,
				password:	this.state.password

			}

		};
		global.socket.emit('RegisterRequest', data);

	}
	handleUsernameChange(event) {
		this.setState({username: event.target.value});

	}
	handleEmailChange(event) {
		this.setState({email: event.target.value});

	}
	handlePasswordChange(event) {
		this.setState({password: event.target.value});
		
	}

}

export default Register;
