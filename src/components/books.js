import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {booksActions} from "../actions/booksActions";

class AllBooks extends Component {
  componentWillMount(){
     this.props.dispatch(booksActions.getBooks())
  }

	render(){
    if(this.props.books.loading){
      return (<p>Loading...</p>)
    }
    let books;
    if(this.props.books.books.all_books){
     books = this.props.books.books.all_books.map(book=>(

       <div className="card-body" key={book.book_id}>
         <h5>{`Title: ${book.book_title}`}</h5>
         <h6>{`Author: ${book.authors}`}</h6>
         <h6>{`Book Isnb: ${book.book_isnb}`}</h6>
         <h6>{`Copies: ${book.copies}`}</h6>
         <Link to={"/api/v1/books/" + book.book_id}><button className="btn btn-success">Check Book</button></Link>
       </div>
      ))
    }

    return(
      <div>
        {books}
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
