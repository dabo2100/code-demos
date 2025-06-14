// To-Do List
let tasks = [
    'Go To Work',
    'Go To Gym',
    'Go To Sleep'
];

// Read
let showTasks = () => {
  console.clear();
  console.table(tasks);
};
// Create
let addNewTask = () => {
  let newTask = prompt("Enter your task");
  tasks.push(newTask);
  showTasks();
};

// Delete
let deleteTask = () => {
  let indexOfTask = +prompt("Enter task no to delete");
  tasks.splice(indexOfTask, 1);
  showTasks();
};

// Update
let editTask = () => {
  let indexOfTask = +prompt("Enter task no to edit");
  let newTaskValue = prompt("Enter new task name");
  tasks[indexOfTask] = newTaskValue;
  showTasks();
};

// CRUD System
// Create
// Read
// Update
// Delete
