import "../assets/css/reset.css";
import '../assets/css/style.css';
import React from 'react';
import Header from './header';
import Main from './main';

const App = () => {
	return (
		<div>
		<Header/>
		<Main />
		</div>
	);
};

export default App;