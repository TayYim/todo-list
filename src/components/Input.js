import React from 'react';

export const Input = ({ todoItems, setTodoItems }) => {
	const handleKeyDown = (event) => {
		if(event.key === "Enter") {
			event.preventDefault();
			const newTodoItems = [...todoItems, event.target.value];
			setTodoItems(newTodoItems);

			event.target.value = '';
		}
	};

	return <input placeholder='Please enter todo...' type="text" onKeyDown={handleKeyDown}/>
};
