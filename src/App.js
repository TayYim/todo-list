import { useState } from 'react';
import { Header } from './components/Header.js';
import { Input } from './components/Input.js';
import { List } from './components/List.js';
import './index.css'
export const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  return (
    <>
        <div class="container">
          <Header />
          <Input todoItems={todoItems} setTodoItems={setTodoItems} />
          <List todoItems={todoItems} setTodoItems={setTodoItems} />
        </div>
      <Header />
      <Input todoItems={todoItems} setTodoItems={setTodoItems} />
      <List todoItems={todoItems} setTodoItems={setTodoItems} />
    </>
    );
}
