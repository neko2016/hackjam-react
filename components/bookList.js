import React from 'react';
import Book from './book';

const BookList = (props) => {
	return (
		<section className={ props.className }>
			<ul>
				{ props.books.map( book => <Book key={book.title} book={book} />) }
			</ul>
		</section>
	);
};
export default BookList;