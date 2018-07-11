import React from "react";
import { Link } from "react-router-dom";

const bookItem = function(param){
  return param.map(book => (
    <div className="card-body" key={book.book_id}>
      <h5>{`Title: ${book.book_title}`}</h5>
      <h6>{`Author: ${book.authors}`}</h6>
      <h6>{`Book Isnb: ${book.book_isnb}`}</h6>
      <h6>{`Copies: ${book.copies}`}</h6>
      <Link to={"/api/v1/books/" + book.book_id}><button className="btn btn-success">Check Book</button></Link>
    </div>
  )
  )
}

// <div>
//   <hr className="my-4"/>
//   <div className="container-fluid pt-5 pb-5 bg-light">
//       <div className="container">
//           <div className="row">
//               <div className="col-md-4">
//                   <div className="row">
//                   </div>
//
//               </div>
//           </div>
//       </div>
//   </div>
//   <hr className="my-4"/>
// </div>

const mapper = data => setTimeout(bookItem(data), 7000)

export default mapper;
