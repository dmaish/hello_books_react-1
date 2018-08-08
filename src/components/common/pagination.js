/**
*  Pagination of books component
*/

import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {booksActions} from "../../actions/booksActions";

class Pagination extends Component {

  componentWillMount(){
    this.props.getBooks()
  }
  render(){
    let books;
    console.log("---->", this.props.books.books);
    return(
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li classNam="page-item">
            <Link to="">
              <a className="page-link" href="#">Previous</a>
            </Link>
          </li>
          <li className="page-item">
            <Link to="">
              <a className="page-link" href="#">1</a>
            </Link>
          </li>
          <li className="page-item">
            <Link to="">
              <a className="page-link" href="#">2</a>
            </Link>
          </li>
          <li className="page-item">
            <Link to="">
              <a className="page-link" href="#">3</a>
            </Link>
          </li>
          <li className="page-item">
            <Link to="">
              <a className="page-link" href="#">Next</a>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.getBooks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => dispatch(booksActions.getBooks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
