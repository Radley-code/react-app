import { useState, useEffect } from "react";
import StatCard from "../components/StatCard";
import '../index.css'


function Dashboard() {
    const [projects, setProjects] = useState(0);
        const [tasks, setTasks] = useState(0);
          const [completed, setCompleted] = useState(0);

        const [posts, setPosts] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    
  })
  .then((data) => {
    setPosts(data);
    setLoading(false);
  })
  .catch((err) => {
    setError(err.message);
    setLoading(false);
  });
},[]);
    return(
        <div >
            <h1>Acha Dashboard</h1>
      <p style={ {fontSize: "29px", textAlign: "center"} }>Learning React </p>
{loading && <p>Loading Posts...</p>}
{error && <p style={{color: "red"}} >{error}</p>}

<ul>
  {posts.map((posts) => (
    <li key={posts.id} >
      <strong>{posts.title}</strong>
    <p>{posts.body}</p>
    </li>
  ))}
</ul>



    <section>
      <h2>Stats</h2>
      <div className="stats-div">
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