/**
*  Block in the landing page container
* The landing page should contains block after couresel
*/

import React from "react";
import {Link} from "react-router-dom";

const BlockDiv = () => (
	<div
		className="container-fluid offer pt-3 pb-3 d-none d-md-block"
		id="top-line">
		<div className="container">
			<h1 className="text-center">
WHY PEOPLE CHOOSE US
			</h1>
			<div className="row">
				<div className="col-md-4 m-right">
					<h4>
Free Registration
					</h4>
					<p>
Any person can register in our system for free. There are no additional charges.
					</p>
					<Link to="/api/v1/auth/register">
						<button className="btn btn-primary btn-lg">Sign Up</button>
					</Link>
				</div>
				<div className="col-md-4 m-right">
					<h4>Access to Thousands of Books</h4>
					<p>There are thousands of books available for borrow.</p>
					<Link to="/api/v1/auth/login">
						<button className="btn btn-primary btn-lg">Log In</button>
					</Link>
				</div>
				<div className="col-md-4">
					<h4>Many Categories</h4>
					<p>There are many categories in our bookstore to choose.</p>
					<Link to="/api/v1/books">
						<button className="btn btn-primary btn-lg">All Books</button>
					</Link>
				</div>
			</div>
		</div>
	</div>

);

export default BlockDiv;
