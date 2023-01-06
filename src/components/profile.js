import React from "react";
import '../styles/profile.css';

const Profile = class extends React.Component {
	constructor(properties) {
		super(properties);
		this.state = {
			username: '',
			wins: '',
			draws: '',
			losses: ''

		};

	}
	render() {
		return (
			<main className="Profile">
				<div className="Result">{this.state.username}</div>
				<div className="Result">{this.state.wins}</div>
				<div className="Result">{this.state.draws}</div>
				<div className="Result">{this.state.losses}</div>

			</main>

		);

	}
	componentDidMount() {
		global.socket.on('ProfileResponse', this.handleProfileResponse.bind(this));
		let data = {
			hash: global.hash,
			mainData: null

		};
		global.socket.emit('ProfileRequest', data);

	}
	componentWillUnmount() {
		global.socket.off('ProfileResponse');

	}
	handleProfileResponse(data) {
		console.log(data);
		this.setState({username: data.username});
		this.setState({wins: 'WINS: ' + data.wins});
		this.setState({draws: 'DRAWS: ' + data.draws});
		this.setState({losses: 'LOSSES: ' + data.losses});

	}

}

export default Profile;
