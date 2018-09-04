/**
 *  The component that allows users to reset password
 *  when they forget
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../common/logo.jpg';
import loading from '../../assets/images/loading.gif';
import { alertActions } from '../../actions/alertActions';
import { history } from '../../helpers/history';
import { resetPasswordAction } from '../../actions/userActions';

class ResetPasswordContainer extends Component {
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
    dispatch(resetPasswordAction(user));
  }

  render() {
    const { alert } = this.props;
    const { resetting } = this.props;
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
              {alert.message === 'The email does not exist.' ? (
                <div className="bg bg-danger">
                  {alert.message && (
                  <div className={'alert $ {alert.type}'}>
                    {' '}
                    {alert.message}
                  </div>
                  )}
                </div>
              ) : null}
              <div>
                <div className="form-group required">
                  <label className="control-label" htmlFor="exampleInputPassword1">
                    New Password:
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
                {alert.message === 'Password length minimum is 8 characters.' ? (
                  <div className="btn btn-danger">
                    {alert.message && (
                      <div className={'alert $ {alert.type}'}>
                        {' '}
                        {alert.message}
                        {' '}
                      </div>
                    )}
                  </div>
                ) : null}
                <div className="d-inline mx-auto center">
                  <button type="submit" className="btn btn-primary">
                    Reset Password
                  </button>
                  {resetting && <img id="loading-img" alt="loading img" src={loading} />}
                </div>
                <br />
                <p align="center">
                  Need to go home?
                  {' '}
                  <Link to="/">Click here</Link>
                </p>
                <p align="center">
                  Need to login?
                  {' '}
                  <Link to="/auth/login">Click here</Link>
                </p>
                <br />
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
  const { resetting } = state.resetPasswordReducer;
  return {
    resetting,
    alert: state.alert,
  };
};

export default connect(mapStateToProps)(ResetPasswordContainer);
