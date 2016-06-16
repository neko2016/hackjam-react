import React from 'react';

const Sidebar = (props) => {
	return (
		<div className={ props.navClosed ? 'filter filter-is-visible': 'filter' }>
			<form>
				<div className="filter-block">
					<h4>Search</h4>
					<div className="filter-content">
						<input type="search" placeholder="title, price..." onChange={ props.onChange }/>
					</div>
				</div>
			</form>
			<a href="#0" className="close" onClick={ props.closeSidebar }>Close</a>
		</div>
	);
};

export default Sidebar;