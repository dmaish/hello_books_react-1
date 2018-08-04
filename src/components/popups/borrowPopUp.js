import React, {Component} from "react";


class BorrowPopUp extends Component{

  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">About to borrow a book!</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          Are you sure you want to borrow this book?
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-info"
          onClick={ (e) => {e.preventDefault();this.props.borrow(book.book_id)}}>Borrow Book
          </button>
        </div>
      </div>
    </div>
  </div>

}

export default BorrowPopUp;
