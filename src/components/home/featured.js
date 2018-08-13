/**
*  The container containing books that are recently borrowed
*/

import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {featuredBooksAction} from "../../actions/booksActions";

class Featured extends Component{
	componentWillMount(){
     this.props.dispatch(featuredBooksAction())
  }
	render(){
		let books;
		if(this.props.books.books.books){
     books = this.props.books.books.books.map((book, index)=>(
       <div className="col-md-3">
         <div className="card-body" key={book.book_id}>
           <h5>{`Title: ${book.book_title}`}</h5>
           <h6>{`Author: ${book.authors}`}</h6>
           <h6>{`Edition: ${book.book_edition}`}</h6>
           <h6>{`Book Isnb: ${book.book_isnb}`}</h6>
           <h6>{`Copies: ${book.copies}`}</h6>
           <Link to={"/api/v1/books/" + book.book_id}><button className="btn btn-info">Check Book</button></Link>
         </div>
       </div>
      ))
    }
		return (
			<div className="container-fluid bg-light">
				<div className="container pt-5">
					<div className="row">
						<h3 id="featured">
							<b>FEATURED</b>
						</h3>
					</div>
				</div>
				<div className="container">
					<div className="row">
						{books}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		  books:state.getBooks
	}
}

export default connect(mapStateToProps)(Featured);
