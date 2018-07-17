import React, {Component} from "react";
import {connect} from "react-redux";
import {borrowHistory} from "../../actions/borrowHistoryActions";

class BorrowHistory extends Component{
  componentWillMount(){
    this.props.dispatch(borrowHistory.returnBorrowHistory())
  }

  render(){
    let books;
    if (this.props.books.books){
      books = this.props.books.books.map((book, index)=>(
<tbody>
        <tr>
          <td>{index+1}</td>
          <td>{book.book_id}</td>
          <td>{book.borrow_id}</td>
          <td>{book.returned}</td>
        </tr>
        </tbody>
      ))
    }
    return(
      <div className="col-sm-5">
      <hr className="my-4"/>
        <h1 className="text-center">Books Yet To Return</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Book Title</th>
                <th scope="col">Borrow Id</th>
                <th scope="col">Borrowed</th>
                <th scope="col">Due Date</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td scope="row">1</td>
                <td>The Title</td>
                <td>6521</td>
                <td>24/08/2017</td>
                <td>20/09/2017</td>
                <td>
                  <button type="button" className="btn btn-primary">Return Book</button>
                </td>
              </tr>
              <tr>
                <td scope="row">1</td>
                <td>Heights High</td>
                <td>6521</td>
                <td>24/08/2017</td>
                <td>20/09/2017</td>
                <td>
                  <button type="button" className="btn btn-primary">Return Book</button>
                </td>
              </tr>
              <tr>
                <td scope="row">1</td>
                <td>Caleb Olemo</td>
                <td>6521</td>
                <td>24/08/2017</td>
                <td>20/09/2017</td>
                <td>
                  <button type="button" className="btn btn-primary">Return Book</button>
                </td>
              </tr>
          </tbody>
        </table>
      <hr className="my-4"/>
        <h1 className="text-center">The Borrowing History.</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Book Id</th>
                <th scope="col">Borrow Id</th>
                <th scope="col">Status</th>
            </tr>
          </thead>
          {books}
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.borrowHistoryReducer
  }
}

export default connect(mapStateToProps)(BorrowHistory);
