import "./Task.css"
export default function Task({ taskName, isDone }) {
    return (
        <div className="task d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column">
                <h2>{taskName}</h2>
                <div className="d-flex">
                    <p>Task Time</p>
                    <p>Task Date</p>
                </div>
            </div>
            <input type="checkbox" defaultChecked={isDone} />
        </div>
    )
}