/**
 * Borrow history component
 * Get all books borrowed by the user
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { borrowHistory } from '../../actions/borrowHistoryActions';
import PaginateHistory from './paginateHistory';

class BorrowHistory extends Component {
  componentDidMount() {
    this.props.returnBorrowHistory();
  }

  render() {
    let books;
    if (this.props.books.books.all_borrowed_books) {
      books = this.props.books.books.all_borrowed_books.map((book, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{book.book_id}</td>
          <td>{book.borrow_id}</td>
          <td>{book.book_title}</td>
          <td>{book.authors}</td>
          <td>{book.book_isnb}</td>
          <td>{book.date_borrowed}</td>
          <td>{book.due_date}</td>
          <td>{book.returned.toString()}</td>
        </tr>
      ));
    }
    return (
      <div>
        <hr className="my-4" />
        <h1 className="text-center">The Borrowing History.</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Id</th>
              <th scope="col">Borrow Id</th>
              <th scope="col">Book Title</th>
              <th scope="col">Authors</th>
              <th scope="col">Book Isnb</th>
              <th scope="col">Date Borrowed</th>
              <th scope="col">Due Date</th>
              <th scope="col">Returned</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </table>
        <PaginateHistory />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.borrowHistoryReducer,
});

const mapDispatchToProps = dispatch => ({
  returnBorrowHistory: () => dispatch(borrowHistory.returnBorrowHistory()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BorrowHistory);
