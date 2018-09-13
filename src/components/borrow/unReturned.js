/**
 * Books not yet returned history component
 * Get all books borrowed by the user and not yet returned
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { borrowHistory } from '../../actions/borrowHistoryActions';
import ReturnBookModal from '../popups/returnBookPopUp';

class UnReturnedBooks extends Component {
  componentDidMount() {
    this.props.unReturnBooksHistory();
  }

  render() {
    let books;
    if (this.props.books.books.un_returned_books) {
      books = this.props.books.books.un_returned_books.map((book, index) => (
        <tr key={book.book_id}>
          <th scope="row">{index + 1}</th>
          <td>{book.book_id}</td>
          <td>{book.borrow_id}</td>
          <td>{book.book_title}</td>
          <td>{book.authors}</td>
          <td>{book.book_isnb}</td>
          <td>{book.date_borrowed}</td>
          <td>{book.due_date}</td>
          <td>
            <button
              className="btn btn-primary"
              type="button"
              data-toggle="modal"
              data-target={`#returnModal${book.book_id}`}
            >
              Return
            </button>
          </td>
          <ReturnBookModal key={book.book_id} bookId={book.book_id} />
        </tr>
      ));
    }
    return (
      <div>
        <hr className="my-4" />
        <h1 className="text-center">Books Yet To Return</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book id</th>
              <th scope="col">Borrow Id</th>
              <th scope="col">Book Title</th>
              <th scope="col">Authors</th>
              <th scope="col">Book Isnb</th>
              <th scope="col">Date Borrowed</th>
              <th scope="col">Due Date</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.unReturnedBooksReducer,
});

const mapDispatchToProps = dispatch => ({
  unReturnBooksHistory: () => dispatch(borrowHistory.unReturnBooksHistory()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnReturnedBooks);
