/**
*  The headern container of the application landing page
*/

import React from "react";
import {Link} from "react-router-dom"
import library1 from "./library1.jpg";
import kids_library from "./kids_library.jpg";
import complibrary from "./complibrary.jpg";
import Login from "./login";


const Header = () => (
	<div className="carousel-inner">
			<div className="jumbotron">
			<div className="row">
			<div className="col-sm-7">
			<h1 id="h3">Welcome to Hello Books Library</h1>
			<ul className="list-group" id="list">
	  <li className="list-group-item list-group-item-info">
					<i className="material-icons">
			accessible
			</i>Access Thousands of Books</li>
				  <li className="list-group-item list-group-item-info">
					<i className="material-icons">
			assignment_turned_in
					</i>Ebooks Available</li>
	  <li className="list-group-item list-group-item-info">
						<i className="material-icons">
				create
				</i>It is Free to Register</li>
	  <li className="list-group-item list-group-item-info">
		<i className="material-icons">
		add_alert
		</i>14 Days Before Return</li>
	  <li className="list-group-item list-group-item-info">
			<i className="material-icons">
	monetization_on
	</i>Affordable Prices</li>
	</ul>
		</div>
			<div className="col-sm-5">

					<Login>
					</Login>
					</div>
			</div>
				</div>
	</div>

);

export default Header;
