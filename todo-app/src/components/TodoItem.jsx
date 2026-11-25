export default function TodoItem({todo}){

    return (
        <div className="TodoItem">
            <p>{todo.text}</p>
        </div>
    );
}