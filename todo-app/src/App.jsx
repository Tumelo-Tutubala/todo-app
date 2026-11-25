import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodoItem from "./components/TodoItem"

import { useEffect, useState } from "react"
import FilterButtons from "./components/FilterButtons";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "done") return todo.completed;
    return true; // "all"
  });
  return (
    <div className="App">

      <TodoForm text={text} setText={setText} addTodo={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        todos={visibleTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />  
     
    </div>

  );
}