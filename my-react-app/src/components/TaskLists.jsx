function TaskList({ tasksList, deleteTask}) {
    if (tasksList.length ===0 ) {
        return <p>No task Yet</p>;
    }


    return(
        <ul>
            {tasksList.map((task, index) => (
                <li key={index} style={{marginBottom:"0.5rem"}}>
                    {task}
                    <button 
                    onClick={() => deleteTask(index)}
                    style={{ marginLeft: "1rem", backgroundColor:"red"}}
                    >
                        Delete

                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;