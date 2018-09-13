/**
 *  The component that all user to navigate to single book
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Container, Col } from 'reactstrap';
import Nav from '../containers/publicNav';

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        book_details: {},
      },
    };
  }

  componentDidMount() {
    fetch(`https://stark-falls-93345.herokuapp.com/books/${this.props.match.params.book_id}`)
      .then(res => res.json())
      .then(data => this.setState({ book: data }));
  }

  render() {
    const { book } = this.state;
    return (
      <div>
        <Nav />
        <Container>
          <Row>
            <Col sm="4">
              <div className="card-body bg-light" id="card-body">
                <h5>
                  <b>Title:</b>
                  {book.book_details.book_title}
                </h5>
                <h6>
                  <b>Author:</b>
                  {book.book_details.authors}
                </h6>
                <h6>
                  <b>Publisher:</b>
                  {book.book_details.publisher}
                </h6>
                <h6>
                  <b>City Published:</b>
                  {book.book_details.city_published}
                </h6>
                <h6>
                  <b>Year Published:</b>
                  {book.book_details.year}
                </h6>
                <h6>
                  <b>ISNB:</b>
                  {book.book_details.book_isnb}
                </h6>
                <h6>
                  <b>Edition:</b>
                  {book.book_details.book_edition}
                </h6>
                <h6>
                  <b>Copies:</b>
                  {book.book_details.copies}
                </h6>
                <Link to="/books">
                  <button className="btn btn-primary">All Books</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.gettingBook,
});

export default connect(mapStateToProps)(SingleBook);
