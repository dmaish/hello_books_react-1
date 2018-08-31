/**
* Setting the routes of the application
*/

// External(npm modules) and internal(Component) imports
import React, { Component } from "react";
import {Router , Route} from "react-router-dom";
import Landing from "./components/landing";
import {history} from "./helpers/history";
import SignUpContainer from "./components/containers/signupContainer";
import LoginContainer from "./components/containers/loginContainer";
import AllBooks from "./components/containers/booksContainer";
import AdminDashboard from "./components/dashboard/adminDashboard";
import UserDashboard from "./components/dashboard/userDashboard";
import AddBookContainer from "./components/containers/addBookContainer";
import SingleBook from "./components/page/singleBook";
import EditBook from "./components/containers/editContainer";
import BorrowHistory from "./components/borrow/borrowingHistory";
import {PrivateRoute} from "./helpers/privateRoutes";
import UsersList from "./components/containers/usersListContainer";
import ResetPasswordContainer from "./components/containers/resetPasswordContainer";
import "react-toastify/dist/ReactToastify.css";

class Application extends Component {
	// Define routes
	// All private routes are enclosed with PrivateRoute to protect them
	render() {
		return (
			<div>
				<Router history={history}>
					<div>
						<Route exact path="/" component={Landing}></Route>
						<Route path="/auth/register" component={SignUpContainer}></Route>
						<Route path="/auth/login" component={LoginContainer}></Route>
						<Route exact path="/books" component={AllBooks}></Route>
						<PrivateRoute path="/dashboard" component={UserDashboard}></PrivateRoute>
						<PrivateRoute path="/secret/admin/dashboard" component={AdminDashboard}></PrivateRoute>
						<PrivateRoute path="/secret/admin/addbook" component={AddBookContainer}></PrivateRoute>
						<Route path="/books/:book_id" component={SingleBook}></Route>
						<PrivateRoute path="/secret/admin/books/:book_id" component={EditBook}></PrivateRoute>
						<PrivateRoute exact path="/users/books" component={BorrowHistory}></PrivateRoute>
						<PrivateRoute path="/admin/users" component={UsersList}></PrivateRoute>
						<Route path="/auth/reset-password" component={ResetPasswordContainer}></Route>
						<ToastContainer/>
					</div>
				</Router>
			</div>
		);
	}
}

export default Application;
