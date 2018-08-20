import React, {Component} from "react";
import {connect} from "react-redux";
import {borrowHistory} from "../../actions/borrowHistoryActions";

class PaginateHistory extends Component{
  componentWillMount(){
    this.props.borrowHistory()
  }
  render() {
    const { number_of_pages } = this.props.books.books;
    let nextPage = this.props.books.books.next_page;
    let prevPage = this.props.books.books.previous_page;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
        <li className="page-item">
          {
            prevPage !== null?
              <a className="page-link" href="#"
              onClick={() => this.props.borrowHistory(prevPage)}>Previous</a>
              : null
          }
          </li>
          {Array(number_of_pages).fill().map((x, i) => {
              const page = i + 1;
              return (
                <li className="page-item">
                    <a className="page-link" href="#"
                    onClick={ () => this.props.borrowHistory(page) }>{page}</a>
                </li>
              )
            })}
          <li className="page-item">
          {
            nextPage !== null?
              <a className="page-link" href="#"
              onClick={() => this.props.borrowHistory(nextPage)}>Next</a>
              : null
          }
            </li>
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
    borrowHistory: (page) => dispatch(borrowHistory.returnBorrowHistory(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginateHistory);
