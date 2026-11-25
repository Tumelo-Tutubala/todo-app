export default function TodoForm(addTodo){

    return(
         <div className="TodoForm">
            <input
            placeholder="What do you want to do?"
            />
            <button onClick={addTodo}>Add Todo</button>
         </div>
    );
}