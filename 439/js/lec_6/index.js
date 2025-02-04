let input = document.querySelector("input");
input.addEventListener("keydown", (event) => {
  if (event.key == "d") {
    event.preventDefault();
  }
  //   console.log(event);
});

input.addEventListener("paste", (event) => {
  event.preventDefault();
});


// MVC Design Patteren
// Model (Data Model) => M
// View  (HTML) => V
// Controller => C