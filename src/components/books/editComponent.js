import React, {Component} from "react";
import {connect} from "react-redux";
import {booksActions} from "../../actions/booksActions";

class EditBook extends Component{
	constructor(props){
		super(props);
		this.state = {
			book: {
				book_details: {
					year: "",
					edition: "",
					publisher: "",
					city_published:"",
					copies:"",
	        loading: false
				}
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
		const {name, value} = this.target;
		const {book} = this.state;
		this.setState({
        ...book,
        [name]: value
		}
		);
	}
	handleSubmit(e){
		e.preventDefault();
    const {book} = this.state;
		this.props.editBook(book)
	}

  componentDidMount(){
    const {bookId} = this.props.match.params
		this.props.editBook(bookId).then(() => {
			const {book} = this.props
			this.setState({
				book: Object.assign({}, this.state.book.book_details,
				{
					year: book.year,
					edition: book.edition,
					publisher: book.publisher,
					city_published: book.city_published,
					copies: book.copies,
					book_id: book.book_id
				})
			})
		})
  }

  render(){
    const {book} = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="container col-md-5 offset-md-3" id="nav-bg">
            <br />
            <h4 className="text-center">Fill the form to edit book</h4>
            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                onChange={this.handleChange}
                className="form-control"
    						name="publisher"
                id="publisher"
                value={book.book_details.publisher}
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
                value={book.book_details.year}
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
                value={book.book_details.city_published}
                placeholder="Enter city published"
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
                value={book.book_details.edition}
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
                value={book.book_details.copies}
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
		editBook: (book) => dispatch(booksActions.editBook(book))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
