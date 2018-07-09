import React, {Component} from "react";
import {Link} from "react-router-dom";
import {booksActions} from "../../actions/booksActions";
import {connect} from "react-redux";

class AddBookContainer extends Component{
	constructor(props){
		super(props);
		this.state = {
			book: {
				book_title: "",
				authors: "",
				year: "",
				edition: "",
				city_published: "",
				book_isnb: "",
				publisher: "",
				copies: "",
				isLoading: false,
				errors: {}
			},
			submitted: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange (e) {
		const {name, value} = e.target;
		const {book} = this.state;
		this.setState({
      book: {
        ...book,
        [name]: value
      }
    });
  }
	handleSubmit (e) {
    e.preventDefault();
    const {book} = this.state;
    const {dispatch} = this.props;
    dispatch(booksActions.addBook(book));
	}
  render(){
    const {addingBook} = this.props
    const {book} = this.state;
    return (
      <form onSubmit={this.handleSubmit}
      className="form-horizontal">
      <div className="container col-md-5 offset-md-3" id="nav-bg">
        <br />
        <h4 className="text-center">Please fill book details here: </h4>
        <div className="form-group">
          <label htmlFor="booktitle">Book Title</label>
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control"
						name="book_title"
            id="booktitle"
            value={book.book_title}
            placeholder="Enter book title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="authors">Authors</label>
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control"
						name="authors"
            id="authors"
            value={book.authors}
            placeholder="Enter name of authors"
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control"
						name="year"
            id="year"
            value={book.year}
            placeholder="Enter year published"
          />
        </div>
        <div className="form-group">
          <label htmlFor="edition">Edition</label>
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control"
						name="edition"
            id="edition"
            value={book.edition}
            placeholder="Enter the book edition"
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="bookisnb">Book isnb</label>
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control"
						name="book_isnb"
            id="bookisnb"
            value={book.book_isnb}
            placeholder="Enter book's isnb"
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="copies">Copies</label>
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control"
						name="copies"
            id="copies"
            value={book.copies}
            placeholder="Enter number of copies"
          />
        </div>
				<div className="d-inline mx-auto center">
        <button type="submit" className="btn btn-primary">Submit</button>
        {addingBook}
				</div>
				<br/>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const {addingBook} = state.addBook
  return {
    addingBook
  };
};

export default connect(mapStateToProps)(AddBookContainer);
