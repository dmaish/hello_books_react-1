import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import logo from "../common/logo.jpg";
import {booksActions} from "../../actions/booksActions";
import BorrowHistory from "../borrow/borrowingHistory";


class UserDashboard extends Component{

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
          <td>{book.publisher}</td>
          <td>{book.year}</td>
          <td>{book.book_isnb}</td>
          <td>
            <Link to={`/api/v1/users/books/${book.book_id}`}>
              <button type="button" className="btn btn-info">Borrow Book</button>
            </Link>
          </td>
      </tr>
    )
    }
    return(
      <div className="container-fluid">
    <nav className="navbar navbar-light" id="nav-bg">
        <Link to="/api/v1/dashboard" className="navbar-brand">
            <img src={logo} width="30" height="30" className="d-inline-block align-top"
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
                <Link to="" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">Menu</Link>
                <div className="dropdown-menu">
                    <Link to="/api/v1/users/profile" className="dropdown-item">Return Book</Link>
                    <Link to="/api/v1/users/messages" className="dropdown-item">Messages</Link>
                    <Link to="/api/v1/users/books" className="dropdown-item">Books Borrowed</Link>
                    <div className="dropdown-divider"></div>
                    <Link to="/api/v1/users/books" className="dropdown-item bg-success">Borrow Book</Link>
                </div>
            </li>
            <li className="nav-item">
                <Link to="/api/v1/auth/logout" className="nav-link">Logout</Link>
            </li>
        </ul>
    </nav>
    <div className="row" id="row-1">
      <BorrowHistory/>
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
                    <th scope="col">Publisher</th>
                    <th scope="col">Year</th>
                    <th scope="col">ISNB</th>
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
    getBooks: () => dispatch(booksActions.getBooks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
