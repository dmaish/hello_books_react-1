/**
 *  The component that allows users to login to the system
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../common/logo.jpg';
import loading from '../../assets/images/loading.gif';
import { alertActions } from '../../actions/alertActions';
import { history } from '../../helpers/history';
import { userActions } from '../../actions/userActions';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
    this.state = {
      user: {
        email: '',
        password: '',
        isLoading: false,
        errors: {},
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    dispatch(userActions.login(user));
  }

  render() {
    const { alert } = this.props;
    const { loggingin } = this.props;
    const { user } = this.state;
    return (
      <div className="container-fluid">
        <div id="login_signup" className="log-sign-bg-col">
          <form onSubmit={this.handleSubmit} className="form-horizontal">
            <div className="container col-md-5 offset-md-3" id="top-line">
              <br />
              <div id="bg-colo">
                <img src={logo} id="img-display-form" className="mx-auto d-block" alt="logo" />

                <h4 className="text-center">Hello Books</h4>
              </div>
              <br />
              <div className="form-group required">
                <label className="control-label" htmlFor="exampleInputEmail1">
                  Email:
                </label>
                <input
                  required="true"
                  type="email"
                  onChange={this.handleChange}
                  className="form-control"
                  name="email"
                  value={user.email}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Please enter your email"
                />
              </div>
              {alert.message === 'This user email is not registered. Please register.' ? (
                <div className="bg bg-danger">
                  {alert.message && (
                  <div className={'alert $ {alert.type}'}>
                    {' '}
                    {alert.message}
                    {' '}
                  </div>
                  )}
                </div>
              ) : null}
              <div>
                <div className="form-group required">
                  <label className="control-label" htmlFor="exampleInputPassword1">
                    Password:
                  </label>
                  <input
                    required="true"
                    type="password"
                    onChange={this.handleChange}
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={user.password}
                    placeholder="Please enter your password"
                  />
                </div>
                {alert.message === 'Wrong password.' ? (
                  <div className="bg bg-danger">
                    {alert.message && (
                      <div className={'alert $ {alert.type}'}>
                        {' '}
                        {alert.message}
                        {' '}
                      </div>
                    )}
                  </div>
                ) : null}
                <div
                  className="btn-toolbar d-inline mx-auto center"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <div className="btn-group mr-2" role="group" aria-label="First group">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                    {loggingin && <img id="loading-img" alt="loading img" src={loading} />}
                  </div>
                  <div className="btn-group" role="group" aria-label="Third group">
                    <Link to="/">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">
                        Go Back
                      </button>
                    </Link>
                  </div>
                </div>
                <br />
                <p align="center">
                  Forgot password?
                  {' '}
                  <Link to="/auth/reset-password">Reset Password</Link>
                </p>
                <p align="center">
                  Are you new?
                  {' '}
                  <Link to="/auth/register">Register</Link>
                </p>
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loggingin } = state.loginReducer;
  return {
    loggingin,
    alert: state.alert,
  };
};

export default connect(mapStateToProps)(LoginContainer);
