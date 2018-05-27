import React, {Component} from "react";
import validator from "validator";
import connect from "react-redux";
import loginUser from "././actions/userActions";

export const validate = user => {
	const errors = {};
	if (validator.isEmpty(user.email)) errors.email =
  "Please enter your email.";
	if(validator.isEmpty(user.password)) errors.password =
  "Please enter your password.";
	return errors;
};

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
		this.setState({[name]: value});
	}
	handleSubmit (e) {
		e.preventDefault();
		this.setState({submitted: true});
		const {user} = this.state;
		const {dispatch} = this.props;

		if (user.email && user.password) {
			dispatch(loginUser(user));
		}
	}
	render(){
		const {loggingIn} = this.props;
		const {user} = this.state;
		return(
			<form onSubmit={this.handleSubmit} className="form-horizontal">
				<div className="container col-md-5 offset-md-3" id="nav-bg">
					<h4 className="text-center">Please Log In Here: </h4>
					<div className="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input
							required
							type="email"
							onChange={this.handleChange}
							className="form-control"
							name="email"
							value={user.email}
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email" />
					</div>
					<div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input
								type="password"
								onChange={this.handleChange}
								className="form-control"
								id="exampleInputPassword1"
								name="password"
								value={user.password}
								placeholder="Password" />
						</div>
						<div className="form-check">
							<input
								type="checkbox"
								className="form-check-input"
								id="exampleCheck1" />
							<label
								className="form-check-label"
								htmlFor="exampleCheck1">
      Check me out
							</label>
						</div>
						<div className="d-inline mx-auto center">
							<button type="submit" className="btn btn-primary">
Log In
							</button>
							{loggingIn}
						</div>
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
		loginUser: user => dispatch(loginUser(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
