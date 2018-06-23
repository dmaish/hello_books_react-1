import React from "react";
import {Link} from "react-router-dom";
import heiroffire from "./heiroffire.jpg"

const Footer = () => (
	<div>
		<footer>
			<div className="container-fluid pt-5 bg-dark text-light">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="row">
								<h5>Meta Links</h5>
							</div>
							<nav className="nav flex-column">
								<Link to="/api/v1/books" className="nav-link active">All Books</Link>
								<Link to="/api/v1/auth/register" className="nav-link">Sign Up</Link>
								<Link to="/api/v1/auth/login" className="nav-link">Log In</Link>
								<Link to="/api/v1/login" className="nav-link">Borrow Book</Link>
							</nav>
						</div>
						<div className="col-md-4">
							<div className="media mt-5">
								<img
									src={heiroffire}
									className="img-fluid mr-3"
									alt="my books" />
								<div className="media-body mt-2">
									<h5>Title: Heir of Fire</h5>
									<h6>Author: Sarah Maas</h6>
									<button
										className="btn btn-warning"
										aria-hidden="true">Borrow Book
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="row">
								<h5>
About Us
								</h5>
							</div>
							<p>
This is a library management system that helps you
                    find books and rent books easily.
                    With the system, you are able to sign up
                    free and manage your borrowing.
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>

);

export default Footer;
