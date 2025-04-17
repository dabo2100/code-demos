import AllTasks from "./AllTasks";
import TasksFilter from "./TasksFilter";

export default function App() {
  return (
    <div className="App col-12 d-flex flex-wrap">
      <TasksFilter />
      <AllTasks />
    </div>
  )
}