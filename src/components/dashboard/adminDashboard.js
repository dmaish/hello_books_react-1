/**
* Admin dashboard
* Admin can add a book, edit a book, delete a book and get all users
*/

import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import logo from "../common/logo.jpg";
import {booksActions} from "../../actions/booksActions";
import {deleteBookAction} from "../../actions/booksActions";
import {userActions} from "../../actions/userActions";
import Pagination from "../common/pagination";
import UsersList from "../containers/usersListContainer";
import DeletePopUp from "../popups/deleteBookPopUp";

class AdminDashboard extends Component{

  componentWillMount(){
    this.props.getBooks()
  }

  render() {

    let books;
    if (this.props.books.books.all_books){
      books = this.props.books.books.all_books.map((book, index) => {
        return (
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
              <Link to={`/api/v1/secret/admin/books/${book.book_id}`}>
                <button type="button" className="btn btn-success">Edit</button>
              </Link>
            </td>
            <td>

            <button type="button" className="btn btn-danger" data-toggle="modal"
            data-target={`#deleteModal${book.book_id}`}>Delete</button>
            </td>
            <DeletePopUp key={book.book_id} bookId={book.book_id}/>
        </tr>)
      }
      )
    }

    return(

  <div className="container-fluid">

    <nav className="navbar navbar-light" id="top-line">
        <Link to ="/api/v1/secret/admin/dashboard" className="navbar-brand">
            <img src={logo} id="logoimg" className="d-inline-block align-top"
                 alt="hello books logo"/>
            Hello Books
        </Link>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <button type="button" className="btn btn-secondary"
                onClick={(e) => {e.preventDefault(); this.props.logout()}}
                >Logout</button>
            </li>
        </ul>
    </nav>

    <div className="container">
    <hr className="my-4"/>
    <nav>
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
      <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
      href="#nav-home" role="tab" aria-controls="nav-home"
      aria-selected="true">Library Books</a>
      <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
      href="#nav-profile" role="tab" aria-controls="nav-profile"
      aria-selected="false">List of Users</a>
    </div>
    </nav>
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="nav-home"
      role="tabpanel" aria-labelledby="nav-home-tab">
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
      <div className="tab-pane fade" id="nav-profile"
      role="tabpanel" aria-labelledby="nav-profile-tab">
      <hr className="my-4"/>
      <UsersList/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
