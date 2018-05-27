import React from "react";

const BlockDiv = () => (
	<div
		className="container-fluid offer pt-3 pb-3 d-none d-md-block"
		id="nav-bg1">
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
					<a href="designs/UI/signup.html">
						<button className="btn btn-primary btn-lg">
Sign Up
						</button>
					</a>
				</div>
				<div className="col-md-4 m-right">
					<h4>
Access to Thousands of Books
					</h4>
					<p>
There are thousands of books available for borrow.
					</p>
					<a href="designs/UI/sign.html">
						<button className="btn btn-primary btn-lg">
Log In
						</button>
					</a>
				</div>
				<div className="col-md-4">
					<h4>
Many Categories
					</h4>
					<p>
There are many categories in our bookstore to choose.
					</p>
					<a href="designs/UI/all_books.html">
						<button className="btn btn-primary btn-lg">
All Books
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>
			
);

export default BlockDiv;
