import React, { useState } from 'react'

export default function Todolist() {
    const [tasks, setTasks] = useState(["task1", "task2", "task3"]);
    const addNewTask = () => {
        if (document.querySelector("input").value) {
            let val = document.querySelector("input").value;
            let oTasks = [...tasks];
            oTasks.push(val);
            setTasks(oTasks);
            document.querySelector("input").value = "";
        }
        else{
            alert("املي البتاعة يلا")
        }
    }
    return (
        <div className='col-12'>
            <input type="text" placeholder='Enter New Task name' />
            <button onClick={() => { addNewTask() }}>Add New Task</button>
            <ul>
                {
                    tasks.map((el, index) => {
                        return (
                            <li key={index}>{el}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
