import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {booksActions} from "../../actions/booksActions";


class SingleBook extends Component{
  constructor(props){
    super(props)
    this.state = {
      book_id: this.props.book.book_id,
      book_title: this.props.book.book_title
    }
  }

	componentWillMount(){
		this.props.dispatch(booksActions.getBook());
	}
	render(){
		if (this.props.book.loading){
      return (<p>Loading ....</p>)
		}
    const book = this.state.book
    return(
      <div>
      <div className="card-body" key={this.props.book.book_id}>
        <h5>Title: {this.props.book.book_title}</h5>
        <h6>Author: {this.props.book.authors}</h6>
        <Link to="/api/v1/auth/login"><button className="btn btn-success">Check Book</button></Link>
      </div>
      </div>
    )

      // <div className="card-body" key={book.book_id}>
      //   <h5>{`Title: ${this.state.book.book_title}`}</h5>
      //   <h6>{`Author: ${book.authors}`}</h6>
      //   <h6>{`Book Isnb: ${book.book_isnb}`}</h6>
      //   <h6>{`Copies: ${book.copies}`}</h6>
      //   <Link to="/api/v1/auth/login"><button className="btn btn-success">Check Book</button></Link>
      // </div>
  //   }
  // }
  //   return (
  //     <div>
  //     {book}
  //     </div>
  //   )
	}
}

const mapStateToProps = (state) => {
  return {
    book: state.gettingBook
  }
}

export default connect(mapStateToProps)(SingleBook);
