import React from "react";

export const book = function(props){
  return props.books.map(
    (
    <div className="card-body" key={book.book_id}>
        <br/>
        <br/>
        <h5>{`Title: ${book.book_title}`}</h5>
        <h6>{`Author: ${book.authors}`}</h6>
        <h6>{`Book Isnb: ${book.book_isnb}`}</h6>
        <h6>{`Copies: ${book.copies}`}</h6>
    </div>
  )
)
}

// const SingleBookCard = (props) => {
// 	const {book_title, book_isnb, authors, copies} = props;
//
// 	return(
//         <div className="card-body" key={book_id}>
//             <br/>
//             <br/>
//             <h5>Title: {book_title}</h5>
//             <h6>Author: {authors}</h6>
//             <h6>Book Isnb: {book_isnb}</h6>
//             <h6>Copies: {copies}</h6>
//         </div>
//   );
//
// };
//
// export default SingleBookCard;
