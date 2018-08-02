import React, {Component} from "react";
import {connect} from "react-redux";
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
	handleChange(e){
		this.setState({
			book:  Object.assign({}, this.state.book,{
				[e.target.name]:e.target.value
			})
		});
		console.log(this.state);
	}
	handleSubmit(e){
		e.preventDefault();
    const {book} = this.state;
		console.log(book.edition);
		this.props.editBook(book)
	}

	componentWillMount(){
		let bookId = this.props.match.params.book_id
		fetch(`https://stark-falls-93345.herokuapp.com/books/${bookId}`)
			.then(
				res => {
					return res.json()
				}
			).then(
				data => {

					const book = data.book_details

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
    const {book} = this.state;
		if(!book.book_id){
			return (
				<p>Loadding ..</p>
			)
		}
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="container col-md-5 offset-md-3" id="nav-bg">
            <br />
            <h4 className="text-center">Fill the form to edit book</h4>
						<div className="form-group">
								<label htmlFor="book_title">Book Title</label>
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
						<div className="form-group">
								<label htmlFor="authors">Book Title</label>
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
						<div className="form-group">
								<label htmlFor="book_isnb">Book Title</label>
								<input
										type="text"
										onChange={this.handleChange}
										className="form-control"
										name="book_isnb"
										id="book_isnb"
										value={book.book_isnb}
										placeholder="Enter book isnb"
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
                placeholder="Enter book edition"
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
                placeholder="Enter book title"
              />
            </div>
            <div className="d-inline mx-auto center">
            <button type="submit" className="btn btn-primary">Submit</button>
    				</div>
    				<br/>
        </div>
      </form>
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
		editBook: (bookData) => dispatch(booksActions.editBook(bookData)),
		getBook: (bookId) => dispatch(booksActions.getBook(bookId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
