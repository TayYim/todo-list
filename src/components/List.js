import React from 'react';

export const List = ({ todoItems }) => {
	const list = todoItems.map((element, index) => <li key={index}>{element}</li>);

	return <ul>{list}</ul>;
};