import React from 'react';

export const List = ({ todoItems, setTodoItems }) => {
	const handleDeleteItem = (event) => {
		event.preventDefault();
		const orderOfItemToBeDeleted = parseInt(event.target.getAttribute("order"));
		console.log(`The order of item to be delted in state is: ${orderOfItemToBeDeleted}`);
		console.log("please delete me!");
	};

	const list = todoItems.map((element, index) => 
		<li key={index}>
			{element}
			<button order={index} onClick={handleDeleteItem}>x</button>
		</li>);

	return <ul>{list}</ul>;
};
