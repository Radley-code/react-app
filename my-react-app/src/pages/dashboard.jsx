import { useState } from "react";
import StatCard from "../components/StatCard";
import { useTasks } from "../hooks/useTasks";
useTasks

function Dashboard() {
    const [projects, setProjects] = useState(0);
        const [tasks, setTasks] = useState(0);
          const [completed, setCompleted] = useState(0);
    return(
        <div>
            <h1>Acha Dashboard</h1>
      <p style={ {fontSize: "29px", textAlign: "center"} }>Learning React </p>


    <section>
      <h2>Stats</h2>
      <div style={ {display: "flex", gap: "10px",
        backgroundColor: "#632626", borderRadius: "100px", alignItems: "center", justifyContent: "center"} }>
      <StatCard label="Projects" value={projects} />
      <StatCard label="Tasks" value={tasks} />
      <StatCard label="Completed" value={completed} />
      </div>
    </section>

     <section style={ { marginTop: "1.5rem" } }>
      <h2>Controls</h2>
      <button onClick={() => setProjects(projects + 1)}>Add Project</button>
    <button onClick={() => setTasks(tasks + 1)} style={ {marginLeft: "0.5rem"} }>Add Task</button>
<button onClick={() => setCompleted(completed + 1)} style={ {marginLeft: "0.5rem"} }>Complete task</button>

    </section>
        </div>
    );
}

export default Dashboard;