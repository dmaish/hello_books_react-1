import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../common/logo.jpg";
import user1 from "../../assets/images/user1.png"


class AdminDashboard extends Component{
  render() {
    return(
  <div className="container-fluid">
    <nav className="navbar navbar-light" id="nav-bg">
        <Link to ="/api/v1/secret/admin/dashboard" className="navbar-brand">
            <img src={logo} id="logoimg" className="d-inline-block align-top"
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
                <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">Menu</Link>
                <div className="dropdown-menu">
                    <Link to="/api/v1/admin/messages" className="dropdown-item">Messages</Link>
                    <Link to="/api/v1/books" className="dropdown-item">Add Book</Link>
                    <div className="dropdown-divider"></div>
                    <Link to="/api/v1/users" className="dropdown-item bg-success">All Users</Link>
                </div>
            </li>
            <li className="nav-item">
                <Link to="/api/v1/auth/logout" className="nav-link">Logout</Link>
            </li>
        </ul>
    </nav>
    <div className="row" id="row-1">
        <div className="col-sm-3">
            <div className="card" id="userdashboardimg">
                <img className="card-img-top" src={user1} alt="admin"/>
                <div className="card-body">
                    <h5 className="card-title"><b>My Profile</b></h5>
                    <p className="card-text"><b>Description: </b>I am a professional librarian.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Name:</b> Admin Number</li>
                    <li className="list-group-item"><b>Email:</b> admin@gmail.com</li>
                    <li className="list-group-item"><b>Username:</b> Admin</li>
                    <li className="list-group-item"><b>D.O.B:</b> 01/01/1980</li>
                    <li className="list-group-item"><b>Institution:</b> Kenyatta University</li>
                    <li className="list-group-item"><b>Profession:</b> Librarian</li>
                    <li className="list-group-item"><b>Tel No:</b> +25472434324223</li>
                    <li className="list-group-item"><b>City:</b> Nairobi</li>
                </ul>

            </div>
        </div>
        <div className="col-sm-9">
            <div id="accordion">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                    aria-expanded="true" aria-controls="collapseOne">
                                Add Book
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Book Title: </label>
                                <input type="text" className="form-control" id="formGroupExampleInput"
                                       placeholder="Book Authors"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Authors: </label>
                                <input type="text" className="form-control" id="formGroupExampleInput"
                                       placeholder="Enter Authors"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Publisher: </label>
                                <input type="text" className="form-control" id="formGroupExampleInput"
                                       placeholder="Enter Publisher"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Year: </label>
                                <input type="text" className="form-control" id="formGroupExampleInput"
                                       placeholder="Enter Year"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">ISNB: </label>
                                <input type="text" className="form-control" id="formGroupExampleInput"
                                       placeholder="Enter ISNB"></input>
                            </div>
                            <div className="d-inline mx-auto center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4"/>
                <h1 className="text-center">All Library Books</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book Title</th>
                        <th scope="col">Authors</th>
                        <th scope="col">Publisher</th>
                        <th scope="col">Year</th>
                        <th scope="col">ISNB</th>
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
                        <td>
                            <button type="button" className="btn btn-success">Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>When it Comes to Love: a collection of poems</td>
                        <td>Rama Kaba</td>
                        <td>Zircon Press</td>
                        <td>2015</td>
                        <td>098094323, 9780980943238</td>
                        <td>
                            <button type="button" className="btn btn-success">Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Algorithms to Live By: The Computer Science of Human Decisions</td>
                        <td>Brian Christian, Tom Griffiths</td>
                        <td>HarperCollins Publishers Limited</td>
                        <td>2016</td>
                        <td>0007547978, 9780007547975</td>
                        <td>
                            <button type="button" className="btn btn-success">Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Algorithms to Live By: The Computer Science of Human Decisions</td>
                        <td>Brian Christian, Tom Griffiths</td>
                        <td>HarperCollins Publishers Limited</td>
                        <td>2016</td>
                        <td>0007547978, 9780007547975</td>
                        <td>
                            <button type="button" className="btn btn-success">Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Algorithms to Live By: The Computer Science of Human Decisions</td>
                        <td>Brian Christian, Tom Griffiths</td>
                        <td>HarperCollins Publishers Limited</td>
                        <td>2016</td>
                        <td>0007547978, 9780007547975</td>
                        <td>
                            <button type="button" className="btn btn-success">Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Algorithms to Live By: The Computer Science of Human Decisions</td>
                        <td>Brian Christian, Tom Griffiths</td>
                        <td>HarperCollins Publishers Limited</td>
                        <td>2016</td>
                        <td>0007547978, 9780007547975</td>
                        <td>
                            <button type="button" className="btn btn-success">Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>

    );
  }
}

export default AdminDashboard;
