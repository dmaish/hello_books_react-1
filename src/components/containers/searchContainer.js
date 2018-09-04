/**
 *  The component that allows displays books searched and returned
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import searchAction from '../../actions/searchAction';

class SearchBooks extends Component {
  componentDidMount() {
    this.props.searchAction();
  }

  render() {
    let books;
    if (this.props.books.books.books) {
      books = this.props.books.books.books.map(book => (
        <div className="col-md-4">
          <div className="card-body" key={book.book_id}>
            <h5>{`Title: ${book.book_title}`}</h5>
            <h6>{`Authors: ${book.authors}`}</h6>
            <h6>{`ISNB: ${book.book_isnb}`}</h6>
            <h6>{`Copies: ${book.copies}`}</h6>
          </div>
        </div>
      ));
    }

    return (
      <div className="container-fluid pt-5 pb-5 bg-light">
        <div className="row">{books}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.searchReducers,
});

const mapDispatchToProps = () => dispatch => ({
  searchAction: () => dispatch(searchAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBooks);
