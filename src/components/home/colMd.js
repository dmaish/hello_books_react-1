/**
*  The container for column containing mostly borrowed books 
*/

import React from "react";

const ColMd = () => (
	<div className="col-md-4">
		<div className="row">
			<h4>
MOSTLY BORROWED
			</h4>
		</div>
		<div className="media mt-5">
			<img
				src="static/img/goodnews.jpeg"
				className="img-fluid mr-3"
				alt="my books" />
			<div className="media-body mt-2">
				<h5>
Title: And The Good News Is..
				</h5>
				<h6>
Author: Dana Perino
				</h6>
				<button
					className="btn btn-success"
					aria-hidden="true">
Sign Up to Borrow
				</button>
			</div>
		</div>
		<div className="media mt-5">
			<img
				src="static/img/greatreset.gif"
				className="img-fluid mr-3"
				alt="my books" />
			<div className="media-body mt-2">
				<h5>
Title: The Great Reset
				</h5>
				<h6>
Author: Richard Florida
				</h6>
				<button
					className="btn btn-success"
					aria-hidden="true">
Sign Up to Borrow
				</button>
			</div>
		</div>
		<div className="media mt-5">
			<img
				src="static/img/rework.png"
				className="img-fluid mr-3"
				alt="my books" />
			<div className="media-body mt-2">
				<h5>
Title: Rework
				</h5>
				<h6>
Author: Jason &amp; David
				</h6>
				<button
					className="btn btn-success"
					aria-hidden="true">
Sign Up to Borrow
				</button>
			</div>
		</div>
		<hr className="my-4" />
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				<li className="page-item">
					<a
						className="page-link"
						href="#"
						aria-label="Previous">
						<span aria-hidden="true">«</span>
						<span className="sr-only">Previous</span>
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#">1</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#">2</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#">3</a>
				</li>
				<li className="page-item">
					<a
						className="page-link"
						href="#"
						aria-label="Next">
						<span aria-hidden="true">»</span>
						<span className="sr-only">Next</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>

);

export default ColMd;
