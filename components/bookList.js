import React from 'react';

const BookList = (props) => {
	return (
		<section className={ props.className }>
			{ props.books.map( book => <li key={ book.title }><img src={ book.cover }/></li>) }
	<	/section>
	);
};
export default BookList;