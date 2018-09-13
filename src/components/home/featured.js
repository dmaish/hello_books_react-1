/**
 *  The container containing books that are recently borrowed
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { featuredBooksAction } from '../../actions/booksActions';

class Featured extends Component {
  componentDidMount() {
    this.props.featuredBooksAction();
  }

  render() {
    let books;
    if (this.props.books.books.books) {
      books = this.props.books.books.books.map((book, index) => (
        <div className="col-sm-3" id="marginbottom" key={book.book_id}>
          <div className="card" id="cardheight">
            <div className="card-body" key={book.book_id}>
              <p className="card-text">
                <b>Book Title:</b>
                {' '}
                {book.book_title}
              </p>
              <p className="card-text">
                <b>Author:</b>
                {' '}
                {book.authors}
              </p>
              <p className="card-text">
                <b>Edition:</b>
                {' '}
                {book.book_edition}
              </p>
              <p className="card-text">
                <b>Book Isnb:</b>
                {' '}
                {book.book_isnb}
              </p>
              <p className="card-text">
                <b>Copies:</b>
                {' '}
                {book.copies}
              </p>
              <Link to={`/books/${book.book_id}`}>
                <button className="btn btn-primary">Check Book</button>
              </Link>
            </div>
          </div>
        </div>
      ));
    }
    return (
      <div className="container-fluid">
        <div className="container pt-5">
          <div className="row">
            <h3 id="featured">
              <b>FEATURED</b>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row">{books}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.getBooks,
});

const mapDispatchToProps = dispatch => ({
  featuredBooksAction: () => dispatch(featuredBooksAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Featured);
