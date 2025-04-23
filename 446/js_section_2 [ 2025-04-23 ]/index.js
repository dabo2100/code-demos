let myTodos = ["Task 1", "Go To Work", "Make Homework"];
// console.log(myTodos.indexOf("task 1"));

function showTodos() {
  console.clear();
  console.table(myTodos);
}

function addNewTask() {
  let newTask = prompt("Enter New Task Name");

  if (!newTask || newTask.trim() == "") {
    alert("Task Can not be Empty");
  } else {
    if (newTask.length < 3) {
      alert("min chars must Be 3");
    } else {
      myTodos.push(newTask);
    }
  }
  showTodos();
}

function deleteTask() {
  let valueByUser = prompt("Enter New task index to delete");
  let indexToDelete;
  if (!valueByUser || valueByUser.trim() == "") {
    alert("No Thing to Delete");
  } else {
    indexToDelete = +valueByUser;
    if (isNaN(indexToDelete)) {
      alert("Please Enter Number Only no charts Allowed");
    } else {
      if (indexToDelete >= myTodos.length) {
        alert("InValid Number");
      } else {
        myTodos.splice(indexToDelete, 1);
        showTodos();
      }
    }
  }
}

function updateTask() {
  let indexToUpdate = +prompt("Enter Task index to Edit");
  let newTaskName = prompt("Enter new task name");


  
  myTodos[indexToUpdate] = newTaskName;
  showTodos();
}
