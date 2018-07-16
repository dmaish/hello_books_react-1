import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import logo from "../common/logo.jpg";
import {booksActions} from "../../actions/booksActions";
import DeleteBook from "../page/deleteBook";

class AdminDashboard extends Component{
  componentWillMount(){
    this.props.dispatch(booksActions.getBooks())
  }

  render() {
    let books;
    const {dispatch} = this.props
    if (this.props.books.books.all_books){
      books = this.props.books.books.all_books.map((book, index) =>
        <tr>
            <th scope="row">{index+1}</th>
            <td>{book.book_title}</td>
            <td>{book.authors}</td>
            <td>{book.publisher}</td>
            <td>{book.year}</td>
            <td>{book.book_isnb}</td>
            <td>
              <Link to="/api/v1/secret/admin/editbook">
              <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                Edit</button>
              </Link>
            </td>
            <td>
              <DeleteBook bookId={book.book_id}/>
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
                <Link to="/api/v1/auth/logout" className="nav-link">Logout</Link>
            </li>
        </ul>
    </nav>
    <div className="row" id="row-1">
        <div className="col-sm-4">
        <hr className="my-4"/>
          <h1 className="text-center">All Users</h1>
            <table className="table table-sm">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Books Borrowed</th>
                <th scope="col">Books Unreturned</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Ezrqn</td>
                <td>23</td>
                <td>3</td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>JohnDoe</td>
                <td>10</td>
                <td>1</td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>Samjunior</td>
                <td>2</td>
                <td>0</td>
              </tr>
              <tr>
                <td scope="row">4</td>
                <td>Marlone</td>
                <td>34</td>
                <td>2</td>
              </tr>
              </tbody>
            </table>
        </div>
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
                        <th scope="col">Publisher</th>
                        <th scope="col">Year</th>
                        <th scope="col">ISNB</th>
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

export default connect(mapStateToProps)(AdminDashboard);
