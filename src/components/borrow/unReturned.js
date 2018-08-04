/**
* Books not yet returned history component
* Get all books borrowed by the user and not yet returned
*/

import React, {Component} from "react";
import {connect} from "react-redux";
import {borrowHistory} from "../../actions/borrowHistoryActions";
import {borrowActions} from "../../actions/borrowActions";

class UnReturnedBooks extends Component{
  componentWillMount(){
    this.props.unReturnBooksHistory()
  }

  render(){
    let books;
    if (this.props.books.books){
      books = this.props.books.books.map(
        (book, index) => (
          <tr key={book.book_id}>
            <th scope="row">{index+1}</th>
            <td>{book.book_id}</td>
            <td>{book.borrow_id}</td>
            <td>{book.user_id}</td>
            <td>
              <button type="button" className="btn btn-primary"
              onClick={(e) => {e.preventDefault();this.props.returnBook(book.book_id)}}>
              Return Book
              </button>
            </td>
          </tr>
        )
      )
    }
    return (
      <div>
      <hr className="my-4"/>
        <h1 className="text-center">Books Yet To Return</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Book id</th>
                <th scope="col">Borrow Id</th>
                <th scope="col">user id</th>
            </tr>
          </thead>
          <tbody>
            {books}
          </tbody>
        </table>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.unReturnedBooksReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    unReturnBooksHistory: () => dispatch(borrowHistory.unReturnBooksHistory()),
    returnBook: (book_id) => dispatch(borrowActions.returnBook(book_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnReturnedBooks);
