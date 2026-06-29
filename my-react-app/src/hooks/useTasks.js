import { useState, useEffect } from "react";

export function useTasks() {
    const [tasksList, setTasksList] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });
    const [taskInput, setTaskInput] = useState("");

    function addTask() {
        if(taskInput.trim() === "" ) return;
        setTasksList([...tasksList, taskInput]);
        setTaskInput("");
    }

    function deleteTask(index) {
        const updated = tasksList.filter((_, i) => i !== index);
        setTasksList(updated);
    }

     // Load tasks from local storage on first
  

    //Save tasks to local storage
    useEffect(() => {
        console.log("Saving to local storage");
        localStorage.setItem("tasks", JSON.stringify(tasksList));
    }, [tasksList]);

    return {
        tasksList,
        taskInput,
        setTaskInput,
        addTask,
        deleteTask,
    };

}