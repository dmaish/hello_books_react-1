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
    if(this.props.books.loading){
      return (<p>Loading books...</p>)
    }
    let books;
    if(this.props.books.books.books){
     books = this.props.books.books.books.map(book=>(
       <div className="col-md-4">
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

    return(
      <div>
        <Nav/>
        <hr className="my-4"/>
        <div className="container pt-5 pb-5 bg-light">
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
