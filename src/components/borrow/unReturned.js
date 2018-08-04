import React, {Component} from "react";
import {connect} from "react-redux";
import {borrowHistory} from "../../actions/borrowHistoryActions";

class UnReturnedBooks extends Component{
  componentWillMount(){
    this.props.unReturnBooksHistory()
  }

  render(){
    return (

    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.unReturnedBooksReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    unReturnBooksHistory: () => dispatch(borrowHistory.unReturnBooksHistory())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnReturnedBooks);
