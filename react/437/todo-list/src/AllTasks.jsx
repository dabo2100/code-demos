import { useState } from "react";
import "./AllTasks.css";
import Task from "./Task";
export default function AllTasks() {
    // States
    const [tasks, setTasks] = useState([
        {
            name: "Go for a Walk 1",
            time: "10:37:47AM",
            date: "17/04/2024",
            isDone: false,
        },

        {
            name: "Go for a Walk 2",
            time: "10:37:47AM",
            date: "17/04/2024",
            isDone: false,
        },

        {
            name: "Go for a Walk 3",
            time: "10:37:47AM",
            date: "17/04/2024",
            isDone: false,
        },
    ]);
    return (
        <div className="flex-grow-1 h-100 allTasks d-flex flex-column">
            <header className="col-12 d-flex align-items-center justify-content-between">
                <h1>All</h1>
                <button className="addBtn">Add Task +</button>
            </header>
            <main className="d-flex flex-column gap-2">
                {
                    tasks.map((el, index) => {
                        return (
                            <Task key={index} taskName={el.name} isDone={el.isDone} />
                        )
                    })
                }
            </main>
        </div>
    )
}