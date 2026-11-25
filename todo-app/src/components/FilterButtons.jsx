export default function FilterButtons({filter , setFilter}){

    return(
        <div className="FilterButtons">
            <button
                className={filter === "all" ? "active" : ""}
                onClick={() => setFilter("all")}
            >
                All
            </button>
            <button
                className={filter === "active" ? "active" : ""}
                onClick={() => setFilter("active")}
            >
                Active
            </button>
            <button
                className={filter === "done" ? "active" : ""}
                onClick={() => setFilter("done")}
            >
                Done
            </button>
        </div>
    );
}