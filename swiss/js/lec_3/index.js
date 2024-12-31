document.querySelector(
  "head"
).innerHTML += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;
let today = new Date();
document.write(`
    <h1 class="bg-dark text-center text-white p-3">Today is : ${today}</h1>
    <ul >
      <li class="fs-4">Task 1 </li>
      <li class="fs-4">Task 2</li>
      <li class="fs-4">Task 3</li>
    </ul>
  `);

// On/Off Toggle (Power)
// Temp 16 - 29  (+ , -)
// FanSpeed : 1,2,3 One Button (Fan)