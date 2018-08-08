/**
*  The container containing books that are recently borrowed
*/

import React from "react";
import cottage from "../../assets/images/cottage.jpg";
import eight from "../../assets/images/eight.jpg";
import thedetour from "../../assets/images/thedetour.jpg";
import shapeofwater from "../../assets/images/shapeofwater.jpg";

const RecentlyAdded = () => (
	<div className="container-fluid bg-light-gray">
		<div className="container pt-5">
			<div className="row">
				<h3>
					<b>RECENTLY ADDED</b>
				</h3>
			</div>
		</div>
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-3">
					<div className="card">
						<img
							src={cottage}
							className="card-img-top"
							alt="cottage" />
						<div className="card-body">
							<h5>
Title: Cottage by the Sea
							</h5>
							<h5>Author: Debbie Macomber </h5>
							<button className="btn btn-info">
View All Books
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card">
						<img
							src={eight}
							className="card-img-top"
							alt="eight book" />
						<div className="card-body">
							<h5>
Title: The Eight
							</h5>
							<h5>
Author: Catherine Neville
							</h5>
							<button className="btn btn-info">
View All Books
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card">
						<img
							src={thedetour}
							className="card-img-top"
							alt="detour book" />
						<div className="card-body">
							<h5>
Title: The Detour
							</h5>
							<h5>
Author: Lloyd Bright
							</h5>
							<button className="btn btn-info">
View All Books
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card">
						<img
							src={shapeofwater}
							className="card-img-top"
							alt="shape of water" />
						<div className="card-body">
							<h5>
Title: The Shape of Water
							</h5>
							<h5>
Author: Daniel Kraus
							</h5>
							<button className="btn btn-info">
View All Books
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

);

export default RecentlyAdded;
