/**
*  The component that allows users to get  all books
*/

import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getAllBooksAction} from "../../actions/booksActions";
import Nav from "./publicNav";
import Pagination from "../common/pagination";

class AllBooks extends Component {
  componentWillMount(){
     this.props.dispatch(getAllBooksAction())
  }

	render(){
    let books;
    if(this.props.books.books.books){
     books = this.props.books.books.books.map(book=>(
       <div className="col-sm-3">
       <div className="card">
         <div className="card-body" key={book.book_id}>
           <p><b>Book Title:</b> {book.book_title}</p>
           <p><b>Author:</b> {book.authors}</p>
           <p><b>Edition:</b> {book.book_edition}</p>
           <p><b>Book Isnb:</b> {book.book_isnb}</p>
           <p><b>Copies:</b> {book.copies}</p>
           <Link to={"/api/v1/books/" + book.book_id}><button
           className="btn btn-primary">Check Book</button></Link>
         </div>
      </div>
      <hr className="my-4"/>
      </div>
      ))
    }

    return(
      <div>
        <Nav/>
        <hr className="my-4"/>
        <div className="container">
          <div className="row">
            {books}
          </div>
        </div>
        <hr className="my-4"/>
      </div>
    )
	}
}

const mapStateToProps = (state) => {
  return {
    books:state.getBooks
  }
}

export default connect(mapStateToProps)(AllBooks);
