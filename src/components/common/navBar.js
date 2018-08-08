/**
*  The application navbar container
*/

import React from "react";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";

const NavBar = () =>  (
	<div>
		<nav className="navbar navbar-light" id="top-line">
			<Link to="/" className="navbar-brand">
				<img
					src={logo}
					width={30}
					height={30}
					className="d-inline-block align-top"
					alt="logo" />
            Hello Books
			</Link>
			<ul className="nav justify-content-end">
				<li className="nav-item">
					<Link to="/api/v1/books" className="nav-link"> ALL BOOKS</Link>
				</li>
				<li className="nav-item">
					<Link to="/api/v1/auth/register" className="nav-link"> SIGN UP</Link>
				</li>
				<li className="nav-item">
				<Link to="/api/v1/auth/login" className="nav-link">LOG IN</Link>
				</li>
			</ul>
		</nav>
	</div>

);

export default NavBar;
