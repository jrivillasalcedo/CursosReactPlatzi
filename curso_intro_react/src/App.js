import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const todos = [
  { text: 'lorem ipsum dolor sit amet usu ei laudem platonem', completed: true },
  { text: 'lorem ipsum dolor sit amet usu ei laudem platonem', completed: false },
  { text: 'lorem ipsum dolor sit amet usu ei laudem platonem', completed: false },
  { text: 'lorem ipsum dolor sit amet usu ei laudem platonem', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;