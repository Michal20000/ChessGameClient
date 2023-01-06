import React from "react";
import '../styles/footer.css';

const Footer = class extends React.Component {
	constructor(properties) {
		super(properties);

	}
	render() {
		return (
			<footer>
				<h5>
					Michał Miętkiewski 2023 &copy; Wszelkie prawa zastrzeżone

				</h5>

			</footer>

		);

	}

}

export default Footer;
