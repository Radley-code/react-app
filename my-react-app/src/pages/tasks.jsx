


import StatCard from '../components/StatCard';
import TaskList from '../components/TaskLists';
import { useTasks } from "../hooks/useTasks";
function Tasks() {
    
     const { tasksList, taskInput, setTaskInput, addTask, deleteTask } = useTasks();
    return (
        
    <div style={{ padding: "2rem", fontFamily: "system-ui" }} >
      

   

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

export default Tasks;