let tasks = ["Go To work", "Go to gym", "Eat"];
let showTasks = () => {
  console.clear();
  tasks.forEach((task, index) => {
    console.log(`${index + 1} - ${task}`);
  });
};
let addTask = () => {
  let newTaskName = prompt("Enter New Task Name");
  tasks.push(newTaskName);
  showTasks();
};

let updateTask = () => {
  let taskIndex = +prompt("Enter Task No") - 1;
  let newTaskName = prompt("Enter New Task Name");
  tasks[taskIndex] = newTaskName;
  showTasks();
  // tasks[+prompt("Enter Task No") - 1] = prompt("Enter New Task Name");
};
let deleteTask = () => {
  let taskIndex = +prompt("Enter Task No") - 1;
  tasks.splice(taskIndex, 1);
  showTasks();
};
