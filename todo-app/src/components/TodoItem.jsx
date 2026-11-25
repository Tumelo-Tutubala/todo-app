import { useState } from "react";

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    function handleSave() {
        if (!editText.trim()) return; // don't save an empty task
        editTodo(todo.id, editText);
        setIsEditing(false);
    }

    function handleCancel() {
        setEditText(todo.text); // throw away the changes
        setIsEditing(false);
    }

    return (
        <div className="TodoItem">
            {isEditing ? (
                <>
                    <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span
                            className={
                                todo.completed ? "completed" : "none"
                            }>
                            {todo.text}
                        </span>
                    </label>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </>
            )}
        </div>
    );
}