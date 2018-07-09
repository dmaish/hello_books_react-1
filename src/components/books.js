import React, {Component} from "react";
import {connect} from "react-redux";
import {book} from "./containers/getBooksContainer";
import {booksActions} from "../actions/booksActions";

class AllBooks extends Component {
  compoundDidMount(){
    this.props.booksActions.getBooks()
  }
	render(){
		const {books} = this.props;
		const list = function(){
			return book(books);
		};
    // return (
    //   <div id="main">
    //   {list()}
    // </div>
    // )
    return(
      <div className="card-body" key={book.book_id}>
          <br/>
          <br/>
          <h5>{`Title: ${book.book_title}`}</h5>
          <h6>{`Author: ${book.authors}`}</h6>
          <h6>{`Book Isnb: ${book.book_isnb}`}</h6>
          <h6>{`Copies: ${book.copies}`}</h6>
      </div>
  )
	}
}

const mapStateToProps = (state) => {
  const {gettingBooks} = state.getBooks
  return {
    gettingBooks
  }
}

export default connect(mapStateToProps)(AllBooks);
