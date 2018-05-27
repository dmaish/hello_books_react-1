import React, { Component } from "react";
import "./assets/style.css";
import Footer from "./components/common/footer";
import NavBar from "./components/common/navBar";
import Main from "./components/home/main"

class App extends Component {
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

export default App;
