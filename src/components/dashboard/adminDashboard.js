/**
* Admin dashboard
* Admin can add a book, edit a book, delete a book and get all users
*/

import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import logo from "../common/logo.jpg";
import {booksActions} from "../../actions/booksActions";
import {userActions} from "../../actions/userActions";
import Pagination from "../common/pagination";
import UsersList from "../containers/usersListContainer";

class AdminDashboard extends Component{

  componentWillMount(){
    this.props.getBooks()
  }

  render() {
    let books;
    if (this.props.books.books.all_books){
      books = this.props.books.books.all_books.map((book, index) =>
        <tr>
            <th scope="row">{index+1}</th>
            <td>{book.book_title}</td>
            <td>{book.authors}</td>
            <td>{book.book_edition}</td>
            <td>{book.publisher}</td>
            <td>{book.year}</td>
            <td>{book.book_isnb}</td>
            <td>{book.copies}</td>
            <td>
              <Link to={`/api/v1/secret/admin/books/${book.book_id}`}>
                <button type="button" className="btn btn-success">Edit</button>
              </Link>
            </td>
            <td>





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
                    onClick={ (e) => {e.preventDefault();this.props.deleteBook(book.book_id)} }>Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>



            </td>
        </tr>
      )
    }

    return(
  <div className="container-fluid">
    <nav className="navbar navbar-light" id="nav-bg">
        <Link to ="/api/v1/secret/admin/dashboard" className="navbar-brand">
            <img src={logo} id="logoimg" className="d-inline-block align-top"
                 alt="hello books logo"/>
            Hello Books
        </Link>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <button type="button" className="btn btn-primary">
                    Messages <span className="badge badge-light">4</span>
                </button>
            </li>
            <li className="nav-item dropdown">
                <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">Menu</Link>
                <div className="dropdown-menu">
                    <Link to="/api/v1/admin/messages" className="dropdown-item">Messages</Link>
                    <Link to="/api/v1/secret/admin/addbook" className="dropdown-item">Add Book</Link>
                    <div className="dropdown-divider"></div>
                    <Link to="/api/v1/users" className="dropdown-item bg-success">All Users</Link>
                </div>
            </li>
            <li className="nav-item">
                <button type="button" className="btn btn-warning"
                onClick={(e) => {e.preventDefault(); this.props.logout()}}
                >Logout</button>
            </li>
        </ul>
    </nav>
    <div className="row" id="row-1">
        <UsersList/>
        <div className="col-sm-8">
            <div id="accordion">
                <hr className="my-4"/>
                <h1 className="text-center">All Library Books</h1>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book Title</th>
                        <th scope="col">Authors</th>
                        <th scope="col">Edition</th>
                        <th scope="col">Publisher</th>
                        <th scope="col">Year</th>
                        <th scope="col">ISNB</th>
                        <th scope="col">Copies</th>
                        <th scope="col" colspan="2">
                          <Link to="/api/v1/secret/admin/addbook">
                            <center>
                            <button type="button" className="btn btn-primary">Add Book</button>
                            </center>
                          </Link>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                      {books}
                    </tbody>
                </table>
                <Pagination/>
            </div>
        </div>
    </div>
    </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.getBooks,
    book_id: state.deletingBookReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteBook: (bookId) => dispatch(booksActions.deleteBook(bookId)),
    getBooks: () => dispatch(booksActions.getBooks()),
    logout: () => dispatch(userActions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
