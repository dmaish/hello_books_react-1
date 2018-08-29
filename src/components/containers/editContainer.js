/**
*  The component that allows admin to edit a book
*/

import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {booksActions} from "../../actions/booksActions";

class EditBook extends Component{
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
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	// Handle any changes and make sure that previous state/
	// State of the book/including it details are shown in the form
	// It then detect any chnages and changes its values
	handleChange(e){
		this.setState({
			book:  Object.assign({}, this.state.book,{
				[e.target.name]:e.target.value
			})
		});
	}
	// Ensure that after submission, the book is edited
	// And data new data send through componentDidMount
	handleSubmit(e){
		e.preventDefault();
    const {book} = this.state;
		this.props.editBook(book)
	}

	componentDidMount(){
		let bookId = this.props.match.params.book_id
		// Fetch the current book and set the its state with the current state
		fetch(`https://stark-falls-93345.herokuapp.com/books/${bookId}`)
			.then(
				res => {
					return res.json()
				}
			).then(
				data => {
					// Get the details of the book
					const book = data.book_details
					// Assign the previous objects to the current details rendered.
					this.setState({
							book: Object.assign({}, data.book_details,{
									book_title: book.book_title,
									authors: book.authors,
									year: book.year,
									edition: book.edition,
									publisher: book.publisher,
									book_isnb: book.book_isnb,
									city_published: book.city_published,
									copies: book.copies
								}
							)
					})
			}
			)
			.catch(
				error => {
					console.log(error)
				}
			);
	}

  render(){
		//The current book and its details
    const {book} = this.state;
    return (
			<div id= "login_signup" className="log-sign-bg-col">
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="container col-md-5 offset-md-3" id="top-line">
            <br />
            <h4 className="text-center">Fill the form to edit book</h4>
						<div className="form-group required">
								<label className="control-label" htmlFor="book_title">Book Title</label>
								<input
										type="text"
										onChange={this.handleChange}
										className="form-control"
										name="book_title"
										id="book_title"
										value={book.book_title}
										placeholder="Enter book Title"
								/>
						</div>
						<div className="form-group required">
								<label className="control-label" htmlFor="authors">Authors</label>
								<input
										type="text"
										onChange={this.handleChange}
										className="form-control"
										name="authors"
										id="authors"
										value={book.authors}
										placeholder="Enter authors"
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
            <div className="form-group required">
              <label className="control-label" htmlFor="year">Year</label>
              <input
                type="number"
                onChange={this.handleChange}
                className="form-control"
    						name="year"
                id="year"
                value={book.year}
                placeholder="Enter year published"
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
                placeholder="Enter city published"
              />
            </div>
						<div className="form-group required">
								<label className="control-label" htmlFor="book_isnb">Book ISNB</label>
								<input
										type="number"
										onChange={this.handleChange}
										className="form-control"
										name="book_isnb"
										id="book_isnb"
										value={book.book_isnb}
										placeholder="Enter book isnb"
								/>
						</div>
            <div className="form-group required">
              <label className="control-label" htmlFor="edition">Edition</label>
              <input
                type="number"
                onChange={this.handleChange}
                className="form-control"
    						name="edition"
                id="edition"
                value={book.edition}
                placeholder="Enter book edition"
              />
            </div>
            <div className="form-group required">
              <label className="control-label" htmlFor="copies">Copies</label>
              <input
                type="number"
                onChange={this.handleChange}
                className="form-control"
    						name="copies"
                id="copies"
                value={book.copies}
                placeholder="Enter book title"
              />
            </div>
						<div className="btn-toolbar d-inline mx-auto center" role="toolbar"
						aria-label="Toolbar with button groups">
						  <div className="btn-group mr-2" role="group" aria-label="First group">
							<button type="submit" className="btn btn-primary">Submit</button>
						  </div>
						  <div className="btn-group" role="group" aria-label="Third group">
							<Link to="/api/v1/secret/admin/dashboard">
							<button type="button" className="btn btn-secondary"
							data-dismiss="modal">Cancel
							</button>
							</Link>
						  </div>
						</div>
    				<br/>
        </div>
      </form>
			</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    book:state.editingBook
  }
}

const mapDispatchToProps = dispatch => {
	return {
		editBook: (bookData) => dispatch(booksActions.editBook(bookData))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
