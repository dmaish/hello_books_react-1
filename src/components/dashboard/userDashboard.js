/**
 * The file contains user dashboard.
 * User can see all books, history of borrow/borrow book/return book
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../common/logo.jpg';
import { getBooks } from '../../actions/booksActions';
import BorrowHistory from '../borrow/borrowingHistory';
import UnReturnedBooks from '../borrow/unReturned';
import { userActions } from '../../actions/userActions';
import BorrowPopUp from '../popups/borrowPopUp';
import Pagination from '../common/pagination';
import UserProfile from './userProfile';

class UserDashboard extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    let books;
    if (this.props.books.books.all_books) {
      books = this.props.books.books.all_books.map((book, index) => (
        <tr key={book.book_id}>
          <th scope="row">{index + 1}</th>
          <td>{book.book_title}</td>
          <td>{book.authors}</td>
          <td>{book.book_edition}</td>
          <td>{book.publisher}</td>
          <td>{book.year}</td>
          <td>{book.book_isnb}</td>
          <td>{book.copies}</td>
          <td>
            <button
              type="button"
              className="btn btn-info"
              data-toggle="modal"
              disabled={book.copies === 0}
              data-target={`#borrowModal${book.book_id}`}
            >
              Borrow
            </button>
          </td>

          <BorrowPopUp key={book.book_id} bookId={book.book_id} />
        </tr>
      ));
    }
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light" id="top-line">
          <Link to="/dashboard" className="navbar-brand">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="hello books logo"
            />
            Hello Books
          </Link>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.logout();
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
        <Container fluid>
          <hr className="my-4" />
          <Row>
            <UserProfile />
            <Col xs="9">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    List of Books
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Books Yet To Return
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Borrow History
                  </a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <hr className="my-4" />
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
                    <tbody>{books}</tbody>
                  </table>
                  <Pagination />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <hr className="my-4" />
                  <UnReturnedBooks />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <hr className="my-4" />
                  <BorrowHistory />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.getBooks,
  user: state.userProfileReducer,
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooks()),
  logout: () => dispatch(userActions.logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDashboard);
