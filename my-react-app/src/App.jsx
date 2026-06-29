
import { useState } from 'react';

import './App.css'
import StatCard from './components/StatCard';
import TaskList from './components/TaskLists';
import { useTasks } from "./hooks/useTasks";


function App() {

  const [projects, setProjects] = useState(0);
    const [tasks, setTasks] = useState(0);
      const [completed, setCompleted] = useState(0);

      const {
        tasksList,
        taskInput,
        setTaskInput,
        addTask,
        deleteTask,
      } = useTasks();

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }} >
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

    <section style={ { marginTop: "2rem" } } >
      <h2>Add Task</h2>
    <p style={ {fontSize: "1.5rem"} }>Task:  
      <input type="text" value={taskInput}
      onChange={(e) => setTaskInput(e.target.value) }
      placeholder='Enter a task '
      style={ { padding:"0.5rem", width: "200px" } }
      /> </p>

      <button 
      onClick={addTask}
      style={ { marginLeft: "0.5rem" , backgroundColor: "green"} }

      >
Add
      </button>

    </section>

    <section style={ {marginTop: "2rem"} }>
      <h2>Task List</h2>
      <TaskList
     tasksList={tasksList} deleteTask={deleteTask}
      />

    </section>

    </div>
  );
}

export default App
