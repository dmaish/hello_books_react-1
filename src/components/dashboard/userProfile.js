import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Col, Card, CardTitle, CardSubtitle, CardBody,
} from 'reactstrap';
import { userProfileAction } from '../../actions/userActions';

class UserProfile extends Component {
  componentDidMount() {
    this.props.userProfileAction();
  }

  render() {
    return (
      <Col xs="3">
        <Card>
          <CardBody>
            <CardTitle>My Profile</CardTitle>
            <br />
            <CardSubtitle>{`Email: ${this.props.user.user.email}`}</CardSubtitle>
            <br />
            <CardSubtitle>
              {`Name: ${this.props.user.user.first_name}  ${this.props.user.user.last_name}`}
            </CardSubtitle>
            <br />
            <CardSubtitle>
              {' '}
              {`Username: ${this.props.user.user.username}`}
            </CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userProfileReducer,
});

const mapDispatchToProps = dispatch => ({
  userProfileAction: () => dispatch(userProfileAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);
