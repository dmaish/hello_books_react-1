import React, {Component} from "react";
import {connect} from "react-redux";
import {borrowHistory} from "../../actions/borrowHistoryActions";

class PaginateHistory extends Component{
  componentWillMount(){
    this.props.borrowHistory()
  }
  render() {
    const {totalPages} = this.props.books.all_borrowed_books;
    console.log("---->", totalPages);
    let nextPage = this.props.books.next_page;
    let prevPage = this.props.books.prev_page;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {
            prevPage !== null?
            <li className="page-item">
              <a className="page-link" href="#"
              onClick={() => this.props.borrowHistory(prevPage)}>Previous</a>
            </li>: null
          }
          <li className="page-item">
            <a className="page-link" href="#"
              onClick={() => this.props.borrowHistory()}>1</a>
          </li>
          {
            nextPage !== null?
            <li className="page-item">
              <a className="page-link" href="#"
              onClick={() => this.props.borrowHistory(nextPage)}>Next</a>
            </li>: null
          }
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.borrowHistoryReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    borrowHistory: (page) => dispatch(borrowHistory.borrowHistory(page))
  }
}

export default (mapStateToProps, mapDispatchToProps)(PaginateHistory);
