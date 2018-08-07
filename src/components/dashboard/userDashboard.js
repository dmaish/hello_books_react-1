/**
* The file contains user dashboard.
* User can see all books, history of borrow/borrow book/return book
*/

import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import logo from "../common/logo.jpg";
import {booksActions} from "../../actions/booksActions";
import {borrowActions} from "../../actions/borrowActions";
import BorrowHistory from "../borrow/borrowingHistory";
import UnReturnedBooks from "../borrow/unReturned"
import {userActions} from "../../actions/userActions";
import BorrowPopUp from "../popups/borrowPopUp";


class UserDashboard extends Component{

  componentWillMount(){
    this.props.getBooks()
  }

  render() {
    let books;
    if (this.props.books.books.all_books){
      books = this.props.books.books.all_books.map((book, index) =>
        <tr key={book.book_id}>
          <th scope="row">{index+1}</th>
          <td>{book.book_title}</td>
          <td>{book.authors}</td>
          <td>{book.book_edition}</td>
          <td>{book.publisher}</td>
          <td>{book.year}</td>
          <td>{book.book_isnb}</td>
          <td>{book.copies}</td>
          <td>
          <button type="button" className="btn btn-info" data-toggle="modal"
          data-target={`#borrowModal${book.book_id}`}>Borrow</button>
          </td>
          <BorrowPopUp key={book.book_id} bookId={book.book_id}/>
      </tr>
    )
    }
    return(
      <div className="container-fluid">
    <nav className="navbar navbar-light" id="top-line">
        <Link to="/api/v1/dashboard" className="navbar-brand">
            <img src={logo} width="30" height="30" className="d-inline-block align-top"
                 alt="hello books logo"/>
            Hello Books
        </Link>
        <ul className="nav justify-content-end">
            <li className="nav-item dropdown">
                <Link to="" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">Menu</ Link>
                <div className="dropdown-menu">
                    <Link to="/api/v1/books" className="dropdown-item">All Books</Link>
                    <Link to="/api/v1/users/books" className="dropdown-item">Books Borrowed</Link>
                    <div className="dropdown-divider"></div>
                </div>
            </li>
            <li className="nav-item">
                <button type="button" className="btn btn-warning"
                onClick={ (e) => {e.preventDefault(); this.props.logout()}}
                >Logout</button>
            </li>
        </ul>
    </nav>
    <div className="row" id="row-1">
    <div className="col-sm-5">
        <UnReturnedBooks/>
        <BorrowHistory/>
      </div>
        <div className="col-sm-7">
          <div id="accordion">
          <hr className="my-4"/>
              <h1 className="text-center">The List of Books in Library</h1>
              <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Book Title</th>
                    <th scope="col">Authors</th>
                    <th scope="col">Ed</th>
                    <th scope="col">Publisher</th>
                    <th scope="col">Year</th>
                    <th scope="col">ISNB</th>
                    <th scope="col">Copies</th>
                </tr>
                </thead>
                <tbody>
                  {books}
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.getBooks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => dispatch(booksActions.getBooks()),
    logout: () => dispatch(userActions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
