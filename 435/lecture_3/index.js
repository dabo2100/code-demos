let tasks = [];
function addTask() {
  let newTask = prompt("Enter New Task Name");
  tasks.push(newTask);
  showTasks();
}
function showTasks() {
  console.clear();
  console.log(tasks);
}
function updateTask() {
  let taskIndex = +prompt("Enter Task No") - 1;
  let updateTask = prompt("Enter New Task Name");
  tasks[taskIndex] = updateTask;
  showTasks();
  //   tasks.splice(taskIndex,1,updateTask)
}
function deleteTask() {
  let taskIndex = +prompt("Enter Task No") - 1;
  tasks.splice(taskIndex, 1);
  showTasks();
}
