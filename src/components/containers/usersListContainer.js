/**
 *  The component that allows admin to get list of users
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import usersListActions from '../../actions/usersListActions';

class UsersList extends Component {
  componentDidMount() {
    this.props.usersListActions();
  }

  render() {
    let users;
    if (this.props.users.users.all_users) {
      users = this.props.users.users.all_users.map((user, index) => (
        <tr key={user.user_id}>
          <td>{index + 1}</td>
          <td>{user.username}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
        </tr>
      ));
    }
    return (
      <div>
        <hr className="my-4" />
        <h1 className="text-center">All Users</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersListReducer,
});

const mapDispatchToProps = () => dispatch => ({
  usersListActions: () => dispatch(usersListActions()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList);
