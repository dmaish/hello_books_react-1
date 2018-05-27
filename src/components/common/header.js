import React from "react";
import library1 from "./library1.jpg";
import kids_library from "./kids_library.jpg";
import complibrary from "./complibrary.jpg";


const Header = () => (
	<div>
		<div
			id="carouselExampleIndicators"
			className="carousel slide"
			data-ride="carousel">
			<ol className="carousel-indicators">
				<li
					data-target="#carouselExampleIndicators"
					data-slide-to={0}
					className="active" />
				<li
					data-target="#carouselExampleIndicators"
					data-slide-to={1} />
				<li
					data-target="#carouselExampleIndicators"
					data-slide-to={2} />
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						className="d-block w-100"
						src={complibrary} />
					<div className="carousel-caption d-none d-md-block">
						<h1>
							<b>
THE BEST BOOKSTORE EVER
							</b>
						</h1>
						<p>
Hello World Library brings the latest kinds of books
                  for you. Borrow books from our library.
						</p>
						<button className="btn btn-info btn-lg">
							<a href="designs/UI/signup.html">
SIGN UP NOW
							</a>
						</button>
					</div>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						src={kids_library} />
					<div className="carousel-caption d-none d-md-block">
						<h1>
							<b>
THE BEST BOOKSTORE EVER
							</b>
						</h1>
						<p>
Hello World Library brings the latest
                  kinds of books for you. Borrow books from our library.
						</p>
						<button className="btn btn-info btn-lg">
							<a href="designs/UI/all_books.html">
                    VIEW ALL BOOKS
							</a>
						</button>
					</div>
				</div>
				<div className="carousel-item">
					<img className="d-block w-100" src={library1} />
					<div className="carousel-caption d-none d-md-block">
						<h1>
							<b>
THE BEST BOOKSTORE EVER
							</b>
						</h1>
						<p>
Hello World Library brings the latest kinds of books
                  rom our library.
						</p>
						<button className="btn btn-info btn-lg">
							<a href="designs/UI/signup.html">
CHECK STORE
							</a>
						</button>
					</div>
				</div>
			</div>
			<a
				className="carousel-control-prev"
				href="#carouselExampleIndicators"
				role="button"
				data-slide="prev">
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true" />
				<span className="sr-only">Previous</span>
			</a>
			<a
				className="carousel-control-next"
				href="#carouselExampleIndicators"
				role="button"
				data-slide="next">
				<span
					className="carousel-control-next-icon"
					aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
		</div>
	</div>

);

export default Header;
