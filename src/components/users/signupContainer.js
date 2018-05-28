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
	handleChange (event) {
		const {name, value} = event.target;
		const {user} = this.state;
		this.setState({
			user: {
				...user,
				[name]: value
			}
		});
	}
	handleSubmit (event) {
		event.preventDefault();
		this.setState({submitted: true});
		const {user} = this.state;
		const {dispatch} = this.props;
		if (user.email && user.password && user.username) {
			dispatch(userActions.register(user));
		}
	}
	render(){
		const {registering} = this.props;
		const {user, submitted} = this.state;
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
						{registering}
						// <Link to="/auth/login"></Link>
					</div>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	const {registering} = state.registering;
	return {
		registering
	};
};

const connectedRegister = connect(mapStateToProps)(SignUpContainer);

export {connectedRegister as SignUpContainer};
