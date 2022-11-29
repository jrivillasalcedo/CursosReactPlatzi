// import logo from './logo.svg';
// import './App.css';
import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButton";


const todos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Tomar el curso de React', completed: false },
  { text: 'Lorar mucho', completed: false }
]

function App() {
  return (
    <react.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButtom />      
    </react.Fragment>

  );
}

export default App;
