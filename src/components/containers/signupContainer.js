/**
*  The component that allows users to registering
*/

import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {userActions} from "../../actions/userActions";

class SignUpContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				email: "",
        first_name: "",
        last_name: "",
				username:"",
				password:"",
				isLoading: false,
				errors: {}
			},
			submitted: false
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
		const {user} = this.state;
		const {dispatch} = this.props;
		dispatch(userActions.register(user));
	}
	render(){
		const {registering} = this.props;
		const {user} = this.state;
		return (
			<form onSubmit={this.handleSubmit}
				className="form-horizontal">
				<div className="container col-md-5 offset-md-3" id="nav-bg">
					<br />
					<h4 className="text-center">Please Sign Up Here: </h4>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email: </label>
						<input
							type="email"
							onChange={this.handleChange}
							className="form-control"
							id="exampleInputEmail1"
							name = "email"
							value={user.email}
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
					</div>
          <div className="form-group">
						<label htmlFor="formGroupExampleInput">First Name: </label>
						<input
							type="text"
							onChange={this.handleChange}
							name="first_name"
							className="form-control"
							id="formGroupExampleInput"
							value={user.first_name}
							placeholder="Enter your first name"
						/>
					</div>
          <div className="form-group">
						<label htmlFor="formGroupExampleInput">Last Name: </label>
						<input
							type="text"
							onChange={this.handleChange}
							name="last_name"
							className="form-control"
							id="formGroupExampleInput"
							value={user.last_name}
							placeholder="Enter your last name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="formGroupExampleInput">Username: </label>
						<input
							type="text"
							onChange={this.handleChange}
							name="username"
							className="form-control"
							id="formGroupExampleInput"
							value={user.username}
							placeholder="Enter username"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password: </label>
						<input
							type="password"
							onChange={this.handleChange}
							className="form-control"
							name="password"
							value={user.password}
							id="exampleInputPassword1"
							placeholder="Password" />
					</div>

					<div className="d-inline mx-auto center">
						<button type="submit" className="btn btn-primary">Sign Up</button>
						{registering}
					</div>
					<br/>
					<p>Already have an account? <Link to="/api/v1/auth/login">Login here</Link></p>
					<br/>
				</div>
			</form>
		);
	}
}


const mapStateToProps = (state) => {
	const {registering} = state.registration;
	return {
		registering
	};
};


export default connect(mapStateToProps)(SignUpContainer);
