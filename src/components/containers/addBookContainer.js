/**
 *  The component that allows admin to add a book
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { booksActions } from '../../actions/booksActions';
import loading from '../../assets/images/loading.gif';

class AddBookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        book_title: '',
        authors: '',
        year: '',
        edition: '',
        city_published: '',
        book_isnb: '',
        publisher: '',
        copies: '',
        isLoading: false,
        errors: {},
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { book } = this.state;
    this.setState({
      book: {
        ...book,
        [name]: value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { book } = this.state;
    const { dispatch } = this.props;
    dispatch(booksActions.addBook(book));
  }

  render() {
    const { alert } = this.props;
    const { addingBook } = this.props;
    const { book } = this.state;
    return (
      <div id="login_signup" className="log-sign-bg-col">
        <form onSubmit={this.handleSubmit} className="form-horizontal">
          <div className="container col-md-5 offset-md-3" id="top-line">
            <br />
            <h4 className="text-center">Please fill book details here: </h4>
            <div className="form-group required">
              <label className="control-label" htmlFor="booktitle">
                Book Title
              </label>
              <input
                type="text"
                onChange={this.handleChange}
                className="form-control"
                name="book_title"
                id="booktitle"
                value={book.book_title}
                placeholder="Enter book title"
                required="true"
              />
            </div>
            {alert.message === 'Please enter the book title' ? (
              <div className="bg bg-danger">
                {alert.message && (
                <div className={'alert $ {alert.type}'}>
                  {' '}
                  {alert.message}
                  {' '}
                </div>
                )}
              </div>
            ) : null}
            <div className="form-group required">
              <label className="control-label" htmlFor="authors">
                Authors
              </label>
              <input
                type="text"
                onChange={this.handleChange}
                className="form-control"
                name="authors"
                id="authors"
                value={book.authors}
                placeholder="Enter name of authors"
                required="true"
              />
            </div>
            {alert.message === 'Please enter the authors name' ? (
              <div className="bg bg-danger">
                {alert.message && (
                <div className={'alert $ {alert.type}'}>
                  {' '}
                  {alert.message}
                  {' '}
                </div>
                )}
              </div>
            ) : null}
            <div className="form-group required">
              <label className="control-label" htmlFor="year">
                Year
              </label>
              <input
                type="number"
                onChange={this.handleChange}
                className="form-control"
                name="year"
                id="year"
                value={book.year}
                placeholder="Enter year published"
                required="true"
              />
            </div>
            {alert.message === 'Please enter a valid year'
            || alert.message === 'Please enter a valid year of publishing.' ? (
              <div className="bg bg-danger">
                {alert.message && (
                <div className={'alert $ {alert.type}'}>
                  {' '}
                  {alert.message}
                  {' '}
                </div>
                )}
              </div>
              ) : null}
            <div className="form-group required">
              <label className="control-label" htmlFor="edition">
                Edition
              </label>
              <input
                type="number"
                onChange={this.handleChange}
                className="form-control"
                name="edition"
                id="edition"
                value={book.edition}
                placeholder="Enter the book edition"
                required="true"
              />
            </div>
            {alert.message === 'Please enter the book edition' ? (
              <div className="bg bg-danger">
                {alert.message && (
                <div className={'alert $ {alert.type}'}>
                  {' '}
                  {alert.message}
                  {' '}
                </div>
                )}
              </div>
            ) : null}
            <div className="form-group">
              <label htmlFor="citypublished">City Published</label>
              <input
                type="text"
                onChange={this.handleChange}
                className="form-control"
                name="city_published"
                id="citypublished"
                value={book.city_published}
                placeholder="Enter the city published"
              />
            </div>
            <div className="form-group required">
              <label className="control-label" htmlFor="bookisnb">
                Book isnb
              </label>
              <input
                type="number"
                onChange={this.handleChange}
                className="form-control"
                name="book_isnb"
                id="bookisnb"
                value={book.book_isnb}
                placeholder="Enter book's isnb"
                required="true"
              />
            </div>
            {alert.message === 'Please enter a valid book isnb'
            || alert.message === 'Please enter book isnb' ? (
              <div className="bg bg-danger">
                {alert.message && (
                <div className={'alert $ {alert.type}'}>
                  {' '}
                  {alert.message}
                  {' '}
                </div>
                )}
              </div>
              ) : null}
            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                onChange={this.handleChange}
                className="form-control"
                name="publisher"
                id="publisher"
                value={book.publisher}
                placeholder="Enter publisher"
              />
            </div>
            <div className="form-group required">
              <label className="control-label" htmlFor="copies">
                Copies
              </label>
              <input
                type="number"
                onChange={this.handleChange}
                className="form-control"
                name="copies"
                id="copies"
                value={book.copies}
                placeholder="Enter number of copies"
                required="true"
              />
            </div>
            {alert.message === 'Enter no of copies' ? (
              <div className="bg bg-danger">
                {alert.message && (
                <div className={'alert $ {alert.type}'}>
                  {' '}
                  {alert.message}
                  {' '}
                </div>
                )}
              </div>
            ) : null}
            <div
              className="btn-toolbar d-inline mx-auto center"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                {addingBook && <img id="loading-img" alt="loading img" src={loading} />}
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <Link to="/secret/admin/dashboard">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
            <br />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { addingBook } = state.addBook;
  return {
    addingBook,
    alert: state.alert,
  };
};

export default connect(mapStateToProps)(AddBookContainer);
