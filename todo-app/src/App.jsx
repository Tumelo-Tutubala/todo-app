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
  return (
    <div className="App">

      <TodoForm text={text} setText={setText} addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>

  );
}