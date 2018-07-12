import React, { Component } from "react";
import {Router , Route} from "react-router-dom";
import {connect} from "react-redux";
import Landing from "./components/landing";
import {history} from "./helpers/history";
import {alertActions} from "./actions/alertActions";
import SignUpContainer from "./components/users/signupContainer";
import LoginContainer from "./components/users/loginContainer";
import AllBooks from "./components/books";
import AdminDashboard from "./components/dashboard/adminDashboard";
import UserDashboard from "./components/dashboard/userDashboard";
import AddBookContainer from "./components/containers/addBookContainer";
import SingleBook from "./components/page/singleBook";
import EditBook from "./components/books/editComponent";

class Application extends Component {
	constructor(props) {
		super(props);
		const {dispatch} = this.props;
		history.listen((location, action) => {
			dispatch(alertActions.clear());
		});
	}
	render() {
		const {alert} = this.props;
		return (
			<div>
				{alert.message &&
				<div className={`alert $ {alert.type}`}>{alert.message}
				</div>}
				<Router history={history}>
					<div>
						<Route exact path="/" component={Landing}></Route>
						<Route path="/api/v1/auth/register" component={SignUpContainer}></Route>
						<Route path="/api/v1/auth/login" component={LoginContainer}></Route>
						<Route exact path="/api/v1/books" component={AllBooks}></Route>
						<Route path="/api/v1/dashboard" component={UserDashboard}></Route>
						<Route path="/api/v1/secret/admin/dashboard" component={AdminDashboard}></Route>
						<Route path="/api/v1/secret/admin/addbook" component={AddBookContainer}></Route>
						<Route path="/api/v1/books/:book_id" component={SingleBook}></Route>
						<Route path="/api/v1/books/:book_id" component={EditBook}></Route>
					</div>
				</Router>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {alert} = state;
	return {
		alert
	};
}

const App = connect(mapStateToProps)(Application);

export default App;
