import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodoItem from "./components/TodoItem"

import { useEffect, useState } from "react"

export default function App() {
  const [todo, addTodo] = useState('');
  return (
    <div className="App">

      <TodoForm />

    </div>

  );
}