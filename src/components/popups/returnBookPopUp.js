/**
*  A pop up component for user to return a book.
* Allow user to check on book to make sure he/she
* wants to return the book
*/

<button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
  Delete
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">About to delete a Book</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Are you sure you want to delete this book?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button className="btn btn-danger" type="button"
        onClick={ (e) => {e.preventDefault();this.props.deleteBookAction(book.book_id)} }>Delete
        </button>
      </div>
    </div>
  </div>
</div>
