export default function TodoItem({ todo,toggleTodo, deleteTodo }){

    return (
        <div className="TodoItem">
           <label>
                <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
           </label>    
            <button onClick={() => deleteTodo(todo.id)}>delete</button> 
           
        </div>
    );
}