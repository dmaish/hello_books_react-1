import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../common/logo.jpg";
import goodnews from "../../assets/images/goodnews.jpeg";
import greatreset from "../../assets/images/greatreset.gif";
import rework from "../../assets/images/rework.png";
import eight from "../../assets/images/eight.jpg";
import heiroffire from "../../assets/images/heiroffire.jpg";
import playdirty from "../../assets/images/playdirty.jpg";
import cottage from "../../assets/images/cottage.jpg";
import civiliantradition from "../../assets/images/civiliantradition.png";
import burningbright from "../../assets/images/burningbright.jpg"


class AllBooks extends Component{
  render(){
    return(
    <div className="container-fluid">
    
    <hr className="my-4"/>
    <div className="container-fluid pt-5 pb-5 bg-light">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                    </div>
                    <div className="card-body">
                        <img src={goodnews} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <br/>
                        <br/>
                        <h5>Title: And The Good News Is..</h5>
                        <h6>Author: Dana Perino</h6>
                    </div>
                    <div className="card-body">
                        <img src={greatreset} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: The Great Reset</h5>
                            <h6>Author: Richard Florida</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={rework} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: Rework</h5>
                            <h6>Author: Jason & David</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={eight} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: The Eight</h5>
                            <h6>Author: Katherine Neville</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={heiroffire} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: Heir of Fire</h5>
                            <h6>Author: Sarah Maas</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={playdirty} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: Play Dirty</h5>
                            <h6>Author: Sandra Brown</h6>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                    </div>
                    <div className="card-body">
                        <img src={civiliantradition} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: The Civil Law Tradition</h5>
                            <h6>Author: John Henry</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={burningbright} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: Burning Bright</h5>
                            <h6>Author: Sophie McKenzie</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={goodnews} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: And The Good News Is..</h5>
                            <h6>Author: Dana Perino</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={greatreset} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: The Great Reset</h5>
                            <h6>Author: Richard Florida</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={rework} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: Rework</h5>
                            <h6>Author: Jason & David</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={cottage} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: Cotagge by the Sea</h5>
                            <h6>Author: Debbie Macomber</h6>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                    </div>
                    <div className="card-body">
                        <img src={eight} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: The Eight</h5>
                            <h6>Author: Katherine Neville</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={heiroffire} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: Heir of Fire</h5>
                            <h6>Author: Sarah Maas</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={playdirty} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: Play Dirty</h5>
                            <h6>Author: Sandra Brown</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={goodnews} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: And The Good News Is..</h5>
                            <h6>Author: Dana Perino</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={greatreset} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: The Great Reset</h5>
                            <h6>Author: Richard Florida</h6>

                        </div>
                    </div>
                    <div className="card-body">
                        <img src={rework} id="bookimgs" className="img-fluid mr-3" alt="my books"/>
                        <div className="media-body mt-2">
                            <h5>Title: Rework</h5>
                            <h6>Author: Jason & David</h6>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr className="my-4"/>
</div>
);
  }
}

export default AllBooks;
