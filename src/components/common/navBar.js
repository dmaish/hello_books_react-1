import React from "react";
import logo from "./logo.jpg";

const NavBar = () =>  (
	<div>
		<nav className="navbar navbar-light" id="nav-bg">
			<a className="navbar-brand" href="/">
				<img
					src={logo}
					width={30}
					height={30}
					className="d-inline-block align-top"
					alt="logo" />
            Hello Books
			</a>
			<ul className="nav justify-content-end">
				<li className="nav-item">
					<a
						className="nav-link"
						href="api/v1/books">
ALL BOOKS
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						href="/api/v1/auth/register">
SIGN UP
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						href="/api/v1/auth/login">
LOG IN
					</a>
				</li>
			</ul>
		</nav>
	</div>

);

export default NavBar;
