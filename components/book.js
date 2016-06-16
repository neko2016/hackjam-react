import React from 'react';

const Book = ({book}) => {
	return (
 	<li key={ book.title }><img src={ book.cover }/></li>
	);
};
export default Book;