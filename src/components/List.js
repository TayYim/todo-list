import React from 'react';

export const List = ({ todoItems, setTodoItems }) => {
	const handleDeleteItem = (event) => {
		event.preventDefault();
		const orderOfItemToBeDeleted = parseInt(event.target.getAttribute("order"));
		console.log(`The order of item to be delted in state is: ${orderOfItemToBeDeleted}`);
<<<<<<< HEAD
		console.log(orderOfItemToBeDeleted)
		const newTodoItems = todoItems.filter((x,i)=>orderOfItemToBeDeleted !== i)
		console.log(newTodoItems)
=======
		const newTodoItems = [...todoItems];
		newTodoItems.splice(orderOfItemToBeDeleted, 1); // remove item by index
>>>>>>> add remove
		setTodoItems(newTodoItems);
	};

	const list = todoItems.map((element, index) => 
<<<<<<< HEAD
		<li class="list-item" key={index}>
			<button class="delete-button" order={index} onClick={handleDeleteItem}>x</button>
			{element}
		</li>);

	return <ul class="list-wrap">{list}</ul>;
=======
		<li className='list-item' key={index}>
			<button className='delete-button' order={index} onClick={handleDeleteItem}>x</button>
			{element}
		</li>);

	return <ul className='list-wrap'>{list}</ul>;
>>>>>>> add className
};
