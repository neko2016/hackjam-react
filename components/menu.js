import React from 'react';

const Menu = (props) => {
	const filterItems = props.filterItems;
	return (
		<div className="tab-filter-wrapper">
			<div className="tab-filter">
				<ul>
					<li className="placeholder">
						<a data-type="all" href="#0">All</a>
					</li>
					{filterItems}
				</ul>
			</div>
		</div>
	);
};

export default Menu;

