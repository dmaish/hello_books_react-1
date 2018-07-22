import React, {Component} from "react";
import {connect} from "react-redux";
import {borrowHistory} from "../../actions/borrowHistoryActions";
import {borrowActions} from "../../actions/borrowActions";

class BorrowHistory extends Component{

  componentWillMount(){
    this.props.returnBorrowHistory()
  }

  render(){
    let books;
    if (this.props.books.books.all_borrowed_books){
      books = this.props.books.books.all_borrowed_books.map(
        (book, index) => (
          <tr key={book.book_id}>
            <td>{index+1}</td>
            <td>{book.book_id}</td>
            <td>{book.borrow_id}</td>
            <td>{book.returned}</td>
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
    return(
      <div>
      <hr className="my-4"/>
        <h1 className="text-center">The Borrowing History.</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Book Id</th>
                <th scope="col">Borrow Id</th>
                <th scope="col">Status</th>
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
    books: state.borrowHistoryReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    returnBorrowHistory: () => dispatch(borrowHistory.returnBorrowHistory()),
    returnBook: (book_id) => dispatch(borrowActions.returnBook(book_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BorrowHistory);
