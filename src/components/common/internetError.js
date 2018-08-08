/**
* Internet error component dispatched.
*/

import React, {Component} from "react";

const InternetError = () => {
  return(
    <div className="container-fluid" id="interneterror">
    <p id="left"><i className="material-icons">
      network_check
    </i>
    </p>
    <h3>There is no internet available</h3>
    <h4>Please check your internet connection</h4>
    </div>
  )
}

export default InternetError;
