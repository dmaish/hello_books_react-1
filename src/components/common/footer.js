/**
*  The footer container of the application landing page
*/

import React from "react";
import {Link} from "react-router-dom";

const Footer = () => (
	<div>
		<footer>
			<div className="container-fluid">
				<div className="container">
						<center>	&copy; Hello Books Library 2018</center>
					</div>
				</div>
		</footer>
		<hr className="my-4"/>
	</div>

);

export default Footer;
