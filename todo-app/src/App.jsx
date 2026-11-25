import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodoItem from "./components/TodoItem"

import { useEffect, useState } from "react"

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  function addTodo() {
    if (!text.trim()) return; // stop if the input is empty

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]); // copy the old list, add the new one
    setText("");                   // clear the input
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }
  return (
    <div className="App">

      <TodoForm text={text} setText={setText} addTodo={addTodo} />
      <TodoList todos={todos}  />
  
    </div>

  );
}