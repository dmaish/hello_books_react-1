/**
 *  A pop up component for user to borrow.
 * Allow user to check on book before borrow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { borrow } from '../../actions/borrowActions';

class BorrowPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: null,
    };
    this.handleBorrow = this.handleBorrow.bind(this);
  }

  handleBorrow(e) {
    e.preventDefault();
    this.props.borrowBook(this.props.bookId);
  }

  render() {
    return (
      <div
        className="modal fade"
        id={`borrowModal${this.props.bookId}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                About to borrow a book!
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Are you sure you want to borrow this book?</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button
                data-dismiss="modal"
                type="button"
                className="btn btn-info"
                onClick={this.handleBorrow}
              >
                Borrow Book
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book_id: state.borrowReducer,
});

const mapDispatchToProps = dispatch => ({
  borrowBook: bookId => dispatch(borrow(bookId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BorrowPopUp);
