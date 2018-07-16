import React, {Component} from "react";
import {booksActions} from "../../actions/booksActions";
import {connect} from "react-redux";


class DeleteBook extends Component {
	constructor(props){
		super(props);
		this.state = {
			book_id: ""
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		e.preventDefault();
    this.props.deleteBook(this.props.bookId)
    console.log(this.props);

	}
  render(){
    let book_id;
    return (
    <div>
      <button className="btn btn-danger" type="button" onClick={this.handleClick}>Delete</button>
    </div>
  )
  }

}

const mapStateToProps = (state) => {
  return {
    book_id: state.deletingBookReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteBook: (bookId) => dispatch(booksActions.deleteBook(bookId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeleteBook);
