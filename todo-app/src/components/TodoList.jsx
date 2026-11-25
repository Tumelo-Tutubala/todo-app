import TodoItem from "./TodoItem";

export default function TodoList({todos}){

    return (
        <div className="TodoList">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
}