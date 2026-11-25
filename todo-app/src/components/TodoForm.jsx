export default function TodoForm({ text, setText, addTodo }){

    return(
         <div className="TodoForm">
            <input
            placeholder="What do you want to do?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>
         </div>
    );
}