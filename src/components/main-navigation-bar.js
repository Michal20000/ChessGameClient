import React from "react";
import '../styles/navigation-bar.css';

const HomePage = 0;
const LoginPage = 1;
const RegisterPage = 2;

const MainNavigationBar = class extends React.Component {
	constructor(properties) {
		super(properties);

	}
	render() {
		return (
			<nav className="NavigationBar">
				<ul>
					<li onClick={this.handleHomeClick.bind(this)}>HOME</li>
					<li onClick={this.handleLoginClick.bind(this)}>LOGIN</li>
					<li onClick={this.handleRegisterClick.bind(this)}>REGISTER</li>

				</ul>

			</nav>

		);

	}
	handleHomeClick(event) {
		this.props.change(HomePage);

	}
	handleLoginClick(event) {
		this.props.change(LoginPage);

	}
	handleRegisterClick(event) {
		this.props.change(RegisterPage);
		
	}

}

export default MainNavigationBar;
