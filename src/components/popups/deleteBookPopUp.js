/**
 *  A pop up component for admin to delete book.
 * Allow admin to check before deleting a book
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBookAction } from '../../actions/booksActions';

class DeletePopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteBookAction(this.props.bookId);
  }

  render() {
    return (
      <div
        className="modal fade"
        id={`deleteModal${this.props.bookId}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                About to delete a Book
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Are you sure you want to delete this book?</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button
                data-dismiss="modal"
                className="btn btn-danger"
                type="submit"
                onClick={this.handleClick}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book_id: state.deletingBookReducer,
});

const mapDispatchToProps = dispatch => ({
  deleteBookAction: bookId => dispatch(deleteBookAction(bookId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeletePopUp);
