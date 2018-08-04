import React, { Component } from "react";
import "../assets/style.css";
import Footer from "./common/footer";
import NavBar from "./common/navBar";
import Main from "./home/main"

class Landing extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Main />
				<Footer />
			</div>
		);
	}
}

export default Landing;
