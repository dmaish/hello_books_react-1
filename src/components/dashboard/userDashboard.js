import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../common/logo.jpg";
import user from "../../assets/images/user.jpg";

class UserDashboard extends Component{
  render() {
    return(
      <div className="container-fluid">
    <nav className="navbar navbar-light" id="nav-bg">
        <Link to="/" className="navbar-brand">
            <img src={logo} width="30" height="30" className="d-inline-block align-top"
                 alt="hello books logo"/>
            Hello Books
        </Link>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <button type="button" className="btn btn-primary">
                    Messages <span className="badge badge-light">4</span>
                </button>
            </li>
            <li className="nav-item dropdown">
                <Link to="" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">Menu</Link>
                <div className="dropdown-menu">
                    <Link to="/api/v1/users/profile" className="dropdown-item">Edit Profile</Link>
                    <Link to="/api/v1/users/messages" className="dropdown-item">Messages</Link>
                    <Link to="/api/v1/users/books" className="dropdown-item">Books Borrowed</Link>
                    <div className="dropdown-divider"></div>
                    <Link to="/api/v1/users/books" className="dropdown-item bg-success">Borrow Book</Link>
                </div>
            </li>
            <li className="nav-item">
                <Link to="/api/v1/books" className="nav-link">All Books</Link>
            </li>
        </ul>
    </nav>
    <div className="row" id="row-1">
        <div className="col-sm-3">
            <div className="card" id="userdashboardimg">
                <img className="card-img-top" src={user} alt="user"/>
                <div className="card-body">
                    <h5 className="card-title"><b>My Profile</b></h5>
                    <p className="card-text"><b>Description: </b>I am a student studying computer science.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Name:</b> Ezrqn Kemboi</li>
                    <li className="list-group-item"><b>Email:</b> ezrqnkemboi@gmail.com</li>
                    <li className="list-group-item"><b>First Name:</b>Ezrqn</li>
                    <li className="list-group-item"><b>Last Name:</b>Kemboi</li>
                    <li className="list-group-item"><b>Username:</b> ezrqn</li>
                    <li className="list-group-item"><b>D.O.B:</b> 01/01/2000</li>
                    <li className="list-group-item"><b>Institution:</b> Kenyatta University</li>
                    <li className="list-group-item"><b>Profession:</b> Student</li>
                    <li className="list-group-item"><b>Tel No:</b> +254724508283</li>
                    <li className="list-group-item"><b>City:</b> Nairobi</li>
                    <li className="list-group-item"><b>Address:</b>
                        <ul>Kilimani Rd.,</ul>
                        <ul>Box 30-00100,</ul>
                        <ul>Nairobi</ul>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-sm-9">
        <div className="card-body">
        </div>
            <h1 className="text-center">The List of Books Borrowed.</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Book Title</th>
                    <th scope="col">Authors</th>
                    <th scope="col">Publisher</th>
                    <th scope="col">Year</th>
                    <th scope="col">ISNB</th>
                    <th scope="col">Date Due</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Milk and Honey</td>
                    <td>Rupi Kaur</td>
                    <td>Andrews McMeel Publishing</td>
                    <td>2005</td>
                    <td>1449478654, 9781449478650</td>
                    <td>12/04/2018</td>
                    <td>
                        <button type="button" className="btn btn-primary">Return</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>When it Comes to Love: a collection of poems</td>
                    <td>Rama Kaba</td>
                    <td>Zircon Press</td>
                    <td>2015</td>
                    <td>098094323, 9780980943238</td>
                    <td>10/04/2018</td>
                    <td>
                        <button type="button" className="btn btn-primary">Return</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Algorithms to Live By: The Computer Science of Human Decisions</td>
                    <td>Brian Christian, Tom Griffiths</td>
                    <td>HarperCollins Publishers Limited</td>
                    <td>2016</td>
                    <td>0007547978, 9780007547975</td>
                    <td>01/04/2018</td>
                    <td>
                        <button type="button" className="btn btn-primary">Return</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <h1 className="text-center">My Library History</h1>
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Book Title</th>
                    <th scope="col">Date Borrowed</th>
                    <th scope="col">Date Return</th>
                    <th scope="col">Returned Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Algorithms to Live By: The Computer Science of Human Decisions</td>
                    <td>10/04/2018</td>
                    <td>24/04/2018</td>
                    <td className="bg-success">On time</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>When it Comes to Love: a collection of poems</td>
                    <td>10/04/2018</td>
                    <td>24/04/2018</td>
                    <td className="bg-danger">Late</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Milk and Honey</td>
                    <td>10/04/2018</td>
                    <td>24/04/2018</td>
                    <td className="bg-success">On time</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Introduction to Python Programming</td>
                    <td>10/04/2018</td>
                    <td>24/04/2018</td>
                    <td className="bg-success">On time</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>The Wild Cat</td>
                    <td>10/04/2018</td>
                    <td>24/04/2018</td>
                    <td className="bg-danger">Late</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
    );
  }
}

export default UserDashboard;
