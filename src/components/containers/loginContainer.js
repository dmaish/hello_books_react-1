/**
*  The component that allows users to login to the system
*/

import React, {Component} from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import logo from "../common/logo.jpg"
import {userActions} from "../../actions/userActions";

class LoginContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			user: {
				email: "",
				password: "",
				isLoading: false,
				errors: {}
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange (e) {
		const {name, value} = e.target;
		const {user} = this.state;
		this.setState({
			user: {
				...user,
				[name]: value
			}
		});
	}
	handleSubmit (e) {
		e.preventDefault();
		this.setState({submitted: true});
		const {user} = this.state;
		const {dispatch} = this.props;
		dispatch(userActions.login(user));
	}
	render(){
		const {loggingin} = this.props;
		const {user} = this.state;
		return(
			<div className="container-fluid">
			<div id= "login_signup" className="log-sign-bg-col">
			<form onSubmit={this.handleSubmit} className="form-horizontal">
				<div className="container col-md-5 offset-md-3" id="top-line">
				<br/>
				<div id="bg-colo">
				<img
					src={logo}
					id="img-display-form"
					className="mx-auto d-block"
					alt="logo" />

					<h4 className="text-center">Hello Books</h4>
					</div>
						<br/>
					<div className="form-group required">
						<label className="control-label" htmlFor="exampleInputEmail1">Email:</label>
						<input
							required="true"
							type="email"
							onChange={this.handleChange}
							className="form-control"
							name="email"
							value={user.email}
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Please enter your email" />
					</div>
					<div>
						<div className="form-group required">
							<label className="control-label" htmlFor="exampleInputPassword1">Password:</label>
							<input
								required="true"
								type="password"
								onChange={this.handleChange}
								className="form-control"
								id="exampleInputPassword1"
								name="password"
								value={user.password}
								placeholder="Please enter your password" />
						</div>
						<div className="d-inline mx-auto center">
						<button type="submit" className="btn btn-primary">Log In</button>
							{loggingin}
						</div>
						<br/>
						<p align="center">Forgot password? <Link to="/api/v1/auth/reset-password">Reset Password</Link></p>
						<p align="center">Are you new? <Link to="/api/v1/auth/register">Register</Link></p>
						<br/>
						<br/>
					</div>

				</div>
			</form>
			</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const {loggingin} = state
	return {
		loggingin
	};
};

export default connect(mapStateToProps)(LoginContainer);
