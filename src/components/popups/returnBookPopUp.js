/**
 *  A pop up component for user to return a book.
 * Allow user to check on book to make sure he/she
 * wants to return the book
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { returnBook } from '../../actions/borrowActions';

class ReturnBookModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: null,
    };
    this.handleReturn = this.handleReturn.bind(this);
  }

  handleReturn(e) {
    e.preventDefault();
    this.props.returnBook(this.props.bookId);
  }

  render() {
    return (
      <div
        className="modal fade"
        id={`returnModal${this.props.bookId}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                About to return this Book
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Are you sure you want to return this book?</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button
                data-dismiss="modal"
                className="btn btn-primary"
                type="button"
                onClick={this.handleReturn}
              >
                Return Book
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book_id: state.returnBookReducer,
});

const mapDispatchToProps = dispatch => ({
  returnBook: bookId => dispatch(returnBook(bookId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReturnBookModal);
