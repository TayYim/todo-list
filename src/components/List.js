import React from 'react';

export const List = ({ todoItems, setTodoItems }) => {
	const handleDeleteItem = (event) => {
		event.preventDefault();
		const orderOfItemToBeDeleted = parseInt(event.target.getAttribute("order"));
		console.log(`The order of item to be delted in state is: ${orderOfItemToBeDeleted}`);
		const newTodoItems = [...todoItems];
		newTodoItems.splice(orderOfItemToBeDeleted, 1); // remove item by index
		setTodoItems(newTodoItems);
	};

	const list = todoItems.map((element, index) => 
		<li className='list-item' key={index}>
			{element}
			<button className='delete-button' order={index} onClick={handleDeleteItem}>x</button>
		</li>);

	return <ul className='list-wrap'>{list}</ul>;
};
