import React, {Component} from "react";
import validator from "validator";
import connect from "react-redux";
import registerUser from "././actions/userActions";

export const validate = user => {
	const errors = {};
	if (validator.isEmpty(user.email)) errors.email = "Please enter your email.";
	if (validator.isEmpty(user.username)) errors.username =
  "Please enter your username.";
	if (validator.isEmpty(user.password)) errors.password =
  "Please enter your password.";
	return errors;
};

class SignUpContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				email: "",
				username:"",
				password:"",
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
		this.setState({[name]: value});
	}
	handleSubmit (e) {
		e.preventDefault();
		e.setState({submitted: true});
		const {user} = this.state;
		const {dispatch} = this.state;

		// if (user.email && user.password && user.username) {
		// 	dispatch(registerUser(user));
		// }
	}
	render(){
		const user = this.state;
		const loggingIn = this.props;
		return (
			<form onSubmit={this.handleSubmit}
				className="form-horizontal">
				<div className="container col-md-5 offset-md-3" id="nav-bg">
					<h4 className="text-center">Please Sign Up Here: </h4>
					<div className="form-group">
						<label for="exampleInputEmail1">Email: </label>
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
					<div class="form-group">
						<label for="formGroupExampleInput">Username: </label>
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
						<label for="exampleInputPassword1">Password: </label>
						<input
							type="password"
							onChange={this.handleChange}
							className="form-control"
							name="password"
							value={user.password}
							id="exampleInputPassword1"
							placeholder="Password" />
					</div>
					<div className="form-check">
						<input type="checkbox" className="form-check-input"
							id="exampleCheck1" />
						<label className="form-check-label"
							for="exampleCheck1">Check me out</label>
					</div>
					<div className="d-inline mx-auto center">
						<button type="submit" className="btn btn-primary">Sign Up</button>
						{loggingIn}
					</div>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		registerUser: user => dispatch(registerUser(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
