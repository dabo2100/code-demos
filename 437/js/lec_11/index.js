axios
  .get("https://fakestoreapi.com/products/new/product")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

document.querySelector("span").innerText = 5;

// CRUD
// Create => POST
// Read / => GET
// Update => UPDATE
// remove => DELETE
