/**
 *  Pagination of books component
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/booksActions';

class Pagination extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { total_pages } = this.props.books.books;
    const nextPage = this.props.books.books.next_page;
    const prevPage = this.props.books.books.previous_page;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            {prevPage !== null ? (
              <a className="page-link" href="#" onClick={() => this.props.getBooks(prevPage)}>
                Previous
              </a>
            ) : null}
          </li>
          {Array(total_pages)
            .fill()
            .map((x, i) => {
              const page = i + 1;
              return (
                <li className="page-item" key={i}>
                  <a className="page-link" href="#" onClick={() => this.props.getBooks(page)}>
                    {page}
                  </a>
                </li>
              );
            })}

          <li className="page-item">
            {nextPage !== null ? (
              <a className="page-link" href="#" onClick={() => this.props.getBooks(nextPage)}>
                Next
              </a>
            ) : null}
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  books: state.getBooks,
});

const mapDispatchToProps = dispatch => ({
  getBooks: page => dispatch(getBooks(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
